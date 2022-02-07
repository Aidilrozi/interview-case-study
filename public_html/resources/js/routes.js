import ProductDetail from './components/Product/ProductDetail'
import App from './components/App'
export const routes = [
    
        { path: '/', component: ProductDetail },
        { path: '/product', component: ProductDetail },
        {
            path: '/details/:id',
            name: 'Details',
            component: ProductDetail
        },
      
    
];