// Fetch API data (initial load), shared state for filters + cart, interval stock updates with cleanup

'use client'

import { useEffect, useState, useRef } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';
