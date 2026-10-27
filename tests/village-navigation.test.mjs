import test from 'node:test'
import assert from 'node:assert/strict'
import { createNavigator } from '../docs/.vitepress/components/village/navigation.js'
import { stations } from '../docs/.vitepress/components/village/stations.js'

const obstacles = stations.map(s => ({ x: s.position[0], z: s.position[1], radius: s.id === 'training' ? .95 : .84 }))
obstacles.push({ x: 0, z: 0, radius: .93 })
const nav = createNavigator(obstacles)
const start = { x: -1.15, z: 1.55 }

test('all seven station approaches are reachable without crossing buildings or water', () => {
  for (const station of stations) {
    const distance = Math.hypot(...station.position)
    const ratio = (distance - 1.4) / distance
    const target = { x: station.position[0] * ratio, z: station.position[1] * ratio }
    const route = nav.findPath(start, target)
    assert.ok(route.length >= 2, station.id)
    assert.ok(Math.hypot(route.at(-1).x - target.x, route.at(-1).z - target.z) < .001)
    for (let i = 0; i < route.length; i++) {
      assert.ok(nav.isWalkable(route[i].x, route[i].z), station.id)
      if (i) assert.ok(nav.segmentClear(route[i - 1], route[i]), `blocked segment to ${station.id}`)
    }
  }
})

test('cross-village routes go around the central tree and station footprints', () => {
  const from = { x: -2.1, z: 0 }, to = { x: 2.1, z: 0 }
  assert.equal(nav.segmentClear(from, to), false)
  const route = nav.findPath(from, to)
  assert.ok(route.length > 2)
  for (let i = 1; i < route.length; i++) assert.ok(nav.segmentClear(route[i - 1], route[i]))
})

test('clicks outside the island resolve to a walkable boundary instead of the water', () => {
  const route = nav.findPath(start, { x: 30, z: 30 })
  assert.ok(route.length > 1)
  assert.ok(nav.isWalkable(route.at(-1).x, route.at(-1).z))
  assert.ok(Math.hypot(route.at(-1).x, route.at(-1).z) <= 5.15)
})

test('a fully blocked island returns no route', () => {
  const blocked = createNavigator([{ x: 0, z: 0, radius: 10 }])
  assert.deepEqual(blocked.findPath(start, { x: 2, z: 2 }), [])
})
