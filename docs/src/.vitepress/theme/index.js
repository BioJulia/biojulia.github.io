import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      window.filterPackages = function(filter, btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('#packages-grid .VPFeature').forEach(pkg => {
          if (filter === 'all' || pkg.dataset.category === filter) {
            pkg.style.display = '';
          } else {
            pkg.style.display = 'none';
          }
        });
      };
    }
  }
}
