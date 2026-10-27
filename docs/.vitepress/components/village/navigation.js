export function createNavigator(obstacles, { radius = 5.15, step = .28, clearance = .17 } = {}) {
  const limit = Math.floor(radius / step)
  const key = (x, z) => `${x},${z}`
  const isWalkable = (x, z) => x * x + z * z <= radius * radius
    && obstacles.every((o) => Math.hypot(x - o.x, z - o.z) > o.radius + clearance)
  const segmentClear = (a, b) => {
    const samples = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / (step / 3)))
    for (let i = 0; i <= samples; i++) {
      if (!isWalkable(a.x + (b.x - a.x) * i / samples, a.z + (b.z - a.z) * i / samples)) return false
    }
    return true
  }
  function nearest(point, connect = false) {
    let best
    let distance = Infinity
    for (let x = -limit; x <= limit; x++) {
      for (let z = -limit; z <= limit; z++) {
        const value = { x: x * step, z: z * step, gx: x, gz: z }
        const d = Math.hypot(value.x - point.x, value.z - point.z)
        if (d < distance && isWalkable(value.x, value.z) && (!connect || segmentClear(point, value))) {
          best = value
          distance = d
        }
      }
    }
    return best
  }
  function findPath(from, to) {
    const start = nearest(from, isWalkable(from.x, from.z))
    const goal = nearest(to)
    if (!start || !goal) return []
    const goalKey = key(goal.gx, goal.gz)
    const startKey = key(start.gx, start.gz)
    const open = [start]
    const scores = new Map([[startKey, 0]])
    const parents = new Map()
    const closed = new Set()
    while (open.length) {
      let best = 0
      let bestScore = Infinity
      open.forEach((p, index) => {
        const f = scores.get(key(p.gx, p.gz)) + Math.hypot(p.x - goal.x, p.z - goal.z)
        if (f < bestScore) { best = index; bestScore = f }
      })
      const current = open.splice(best, 1)[0]
      const currentKey = key(current.gx, current.gz)
      if (closed.has(currentKey)) continue
      if (currentKey === goalKey) {
        const route = [{ x: goal.x, z: goal.z }]
        let cursor = currentKey
        while (parents.has(cursor)) {
          const parent = parents.get(cursor)
          route.unshift({ x: parent.x, z: parent.z })
          cursor = key(parent.gx, parent.gz)
        }
        if (isWalkable(from.x, from.z)) route.unshift({ x: from.x, z: from.z })
        if (isWalkable(to.x, to.z) && segmentClear(route.at(-1), to)) route.push({ ...to })
        // Smooth the grid path only where the whole segment remains walkable.
        const smooth = [route[0]]
        let index = 0
        while (index < route.length - 1) {
          let next = route.length - 1
          while (next > index + 1 && !segmentClear(route[index], route[next])) next--
          smooth.push(route[next])
          index = next
        }
        return smooth
      }
      closed.add(currentKey)
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        if (!dx && !dz) continue
        const gx = current.gx + dx
        const gz = current.gz + dz
        const nextKey = key(gx, gz)
        const next = { x: gx * step, z: gz * step, gx, gz }
        if (Math.abs(gx) > limit || Math.abs(gz) > limit || closed.has(nextKey) || !segmentClear(current, next)) continue
        const g = scores.get(currentKey) + Math.hypot(dx, dz) * step
        if (g >= (scores.get(nextKey) ?? Infinity)) continue
        parents.set(nextKey, current)
        scores.set(nextKey, g)
        open.push(next)
      }
    }
    return []
  }
  return { isWalkable, segmentClear, findPath }
}
