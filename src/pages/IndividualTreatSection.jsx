import React from 'react';
import { menuData } from '../constants';
import ProductCard from './ProductCard';

const IndividualTreatSection = ({ treatType, searchQuery = '' }) => {
    const normalize = (s) => (s || '').toString().toLowerCase();
    const q = normalize(searchQuery);
    const matches = (item) => !q || normalize(item.name).includes(q) || normalize(item.desc).includes(q);
    
    let items = [];
    let title = '';
    let subtitle = '';
    let type = '';
    let id = '';
    
    switch (treatType) {
        case 'brownies':
            items = menuData.brownies.filter(matches);
            title = 'Brownies';
            subtitle = 'Rich, fudgy chocolate treats for every chocolate lover';
            type = 'single';
            id = 'brownies';
            break;
        case 'cookies':
            items = menuData.cookies.filter(matches);
            title = 'Cookies (Pack of 6)';
            subtitle = 'Soft, chewy cookies perfect for sharing or indulging';
            type = 'single';
            id = 'cookies';
            break;
        case 'muffins':
            items = menuData.muffins.filter(matches);
            title = 'Muffins & Cupcakes (Pack of 6)';
            subtitle = 'Moist muffins and delightful cupcakes for every taste';
            type = 'muffin';
            id = 'muffins';
            break;
        default:
            return null;
    }
    
    if (items.length === 0) return null;
    
    return (
        <section className="py-10" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }} id={id}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h3 style={{ color: 'var(--color-text)' }} className="text-2xl lg:text-3xl font-bold mb-1">
                        {title}
                    </h3>
                    <p style={{ color: 'var(--color-text)' }} className="opacity-70 text-base">
                        {subtitle}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {items.map((item, index) => (
                        <ProductCard key={index} item={item} type={type} section="treats" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndividualTreatSection;
