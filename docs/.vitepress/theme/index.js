import DefaultTheme from 'vitepress/theme'
import InteractiveModel from '../components/InteractiveModel.vue'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('InteractiveModel', InteractiveModel)
  }
}
