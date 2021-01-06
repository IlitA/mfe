import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

mount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
