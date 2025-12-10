// ============================================================================
// COLORS - Bakery theme palette
// ============================================================================
export const colors = {
  strawberryPink: '#F7B2B7',
  vanillaCream: '#FFF7E0',
  chocolateBrown: '#6B4F39',
  raspberryRed: '#E55472',
  mintGreen: '#A8E6CF',
  white: '#FFFFFF'
};

// ============================================================================
// MENU DATA
// ============================================================================
export const menuData = {
  christmasCakes: [
    { name: 'Santa Cupcakes', price: 330, packLabel: 'per 6 pieces', desc: 'Festive vanilla cupcakes topped with Santa hats and cute face.', rating: 4.8, time: '30 min' },
    { name: 'Brownie Christmas Trees', price: 99, packLabel: 'per piece', desc: 'Rich brownies shaped like little trees, finished with silky ganache and sprinkles.', rating: 4.9, time: '35 min' },
    { name: 'Ginger Bread Cookies', price: 260, packLabel: 'per 6 pieces', desc: 'Classic gingerbread cookies with a soft bite and attractive royal icing.', rating: 4.7, time: '30 min' },
    { name: 'Plum Cake', half: 230, full: 450, sizeHalfLabel: '250gm', sizeFullLabel: '500gm', desc: 'Slow-baked plum cake made with soaked fruits, nuts, and warm spices with a hint of orange flavour.', rating: 4.9, time: '45 min', badge: 'Alcohol Free' },
    { name: 'Banana Bread', price: 450, packLabel: '500gm', desc: 'Moist, sweet bread rich with ripe banana and creamy milk chocolate chunks in every bite.', rating: 4.6, time: '35 min' }
  ],
  classicCakes: [
    { name: 'Vanilla Cake', half: 499, full: 899, desc: 'Soft vanilla sponge with smooth vanilla cream. Light, sweet, and perfect for any occasion. Available in 1/2 kg & 1kg.', rating: 4.5, time: '30 min' },
    { name: 'Pineapple Cake', half: 549, full: 949, desc: 'Light vanilla sponge with whipped cream and pineapple chunks. A tropical delight. Available in 1/2 kg & 1kg.', rating: 4.6, time: '30 min' },
    { name: 'Strawberry Cake', half: 549, full: 949, desc: 'Vanilla sponge with yummy strawberry cream. Fruity, fluffy, and fun to eat. Available in 1/2 kg & 1kg.', rating: 4.7, time: '30 min' },
    { name: 'Blueberry Cake', half: 549, full: 949, desc: 'Soft sponge layered with blueberry filling and cream. A sweet and tangy berry treat. Available in 1/2 kg & 1kg.', rating: 4.5, time: '30 min' },
    { name: 'Raspberry Cake', half: 549, full: 949, desc: 'Vanilla sponge with raspberry compote and cream. A perfect balance of sweet and tart. Available in 1/2 kg & 1kg.', rating: 4.6, time: '30 min' },
    { name: 'Butterscotch Cake', half: 599, full: 999, desc: 'Fluffy sponge with butterscotch cream and caramel sauce. Sweet and crunchy. Available in 1/2 kg & 1kg.', rating: 4.7, time: '35 min' },
    { name: 'Chocolate Cake', half: 599, full: 999, desc: 'Moist chocolate sponge layered with rich chocolate cream. A classic treat for every chocolate lover. Available in 1/2 kg & 1kg.', rating: 4.8, time: '35 min' },
    { name: 'White Forest Cake', half: 649, full: 1049, desc: 'Vanilla sponge with cream and cherries. A light and creamy white chocolate twist. Available in 1/2 kg & 1kg.', rating: 4.7, time: '35 min' },
    { name: 'Black Forest Cake', half: 649, full: 1049, desc: 'Chocolate sponge with whipped cream and cherries. A delicious blend of rich and fruity flavors. Available in 1/2 kg & 1kg.', rating: 4.9, time: '35 min' }
  ],
  premiumCakes: [
    { name: 'Lychee Cake', half: 699, full: 1199, desc: 'Delicate vanilla sponge layered with lychee-flavored cream and real lychee pieces. Available in 1/2 kg & 1kg.', rating: 4.8, time: '40 min' },
    { name: 'Rich Tres Leches Cake', half: 749, full: 1249, desc: 'Sponge cake soaked in three milks. Topped with whipped cream for a melt-in-the-mouth texture. Available in 1/2 kg & 1kg.', rating: 4.9, time: '40 min' },
    { name: 'Caramel Delight Cake', half: 749, full: 1249, desc: 'Soft sponge infused with caramel sauce and layered with caramel cream. Available in 1/2 kg & 1kg.', rating: 4.7, time: '40 min' },
    { name: 'Fresh Fruit Cake', half: 749, full: 1249, desc: 'Light vanilla sponge topped with whipped cream and seasonal fresh fruits. Available in 1/2 kg & 1kg.', rating: 4.6, time: '35 min' },
    { name: 'Very Berry Infused Cake', half: 749, full: 1249, desc: 'Moist vanilla sponge filled with mixed berry compote and whipped cream. Available in 1/2 kg & 1kg.', rating: 4.8, time: '40 min' },
    { name: 'Belgian Chocolate Cake', half: 799, full: 1299, desc: 'Made with premium Belgian cocoa and layered with silky chocolate ganache. Available in 1/2 kg & 1kg.', rating: 4.9, time: '45 min' },
    { name: 'Redvelvet Creamcheese Cake', half: 799, full: 1299, desc: 'Moist red velvet layers with cream cheese frosting. Rich, tangy, and indulgent. Available in 1/2 kg & 1kg.', rating: 4.9, time: '45 min' }
    

  ],
  chefSpeciality: [
    { name: 'Mocha Fudge Fantasy', price: 1599, desc: 'Rich coffee-infused cake with chocolate fudge layers. A perfect blend of coffee and chocolate. Available in 1kg.', rating: 4.9, time: '50 min' },
    { name: 'Choco Berry Burst', price: 1599, desc: 'Chocolate sponge with mixed berry compote and chocolate ganache. A fruity chocolate delight. Available in 1kg.', rating: 4.8, time: '50 min' },
    { name: 'Dreamy Tiramisu', price: 1599, desc: 'Classic Italian dessert with coffee-soaked layers and mascarpone cream. Elegant and sophisticated. Available in 1kg.', rating: 4.9, time: '45 min' },
    { name: 'Rasmalai Magic', price: 1599, desc: 'Soft cottage cheese dumplings in sweetened milk. A traditional Indian dessert reimagined. Available in 1kg.', rating: 4.9, time: '50 min' },
    { name: 'Banana Bliss', price: 1599, desc: 'Moist banana cake with cream cheese frosting and caramel drizzle. Sweet and comforting. Available in 1kg.', rating: 4.7, time: '45 min' },
    { name: 'Creamy Carrot Indulgence', price: 1599, desc: 'Spiced carrot cake with cream cheese frosting and walnut pieces. Warm and wholesome. Available in 1kg.', rating: 4.8, time: '50 min' },
    { name: 'Golden Honey Charm', price: 1599, desc: 'Honey-infused sponge with vanilla cream and honey drizzle. Sweet and golden perfection. Available in 1kg.', rating: 4.8, time: '45 min' },
    { name: 'Apricot Passion', price: 1599, desc: 'Vanilla sponge with apricot compote and whipped cream. A fruity and refreshing treat. Available in 1kg.', rating: 4.7, time: '45 min' },
    { name: 'Sugar Cloud Cheesecake', price: 1649, desc: 'Creamy cheesecake with a buttery biscuit base. Light, fluffy, and absolutely divine. Available in 1kg.', rating: 4.9, time: '50 min' },
    { name: 'Guilt-Free Goodness', price: 1699, desc: 'Healthy cake made with natural ingredients and no refined sugar. Delicious and nutritious. Available in 1kg.', rating: 4.8, time: '50 min', badge: 'Healthy' }
  ],
  brownies: [
    { name: 'Classic Brownie', price: 99, desc: 'Rich, fudgy chocolate brownie with a perfect chewy texture. A timeless favorite.', rating: 4.6, time: '20 min' },
    { name: 'Nutella Brownie', price: 109, desc: 'Chocolate brownie swirled with creamy Nutella. Decadent and irresistible.', rating: 4.8, time: '20 min' },
    { name: 'Walnut Brownie', price: 109, desc: 'Classic brownie loaded with crunchy walnuts. Perfect balance of texture and flavor.', rating: 4.7, time: '20 min' },
    { name: 'Biscoff Brownie', price: 109, desc: 'Chocolate brownie with Biscoff cookie spread. A European-inspired treat.', rating: 4.8, time: '25 min' },
    { name: 'Pistachio Brownie', price: 109, desc: 'Rich brownie topped with crushed pistachios. Nutty and luxurious.', rating: 4.7, time: '25 min' },
    { name: 'Peanut Butter Brownie', price: 109, desc: 'Chocolate brownie swirled with smooth peanut butter. A perfect sweet and salty combo.', rating: 4.8, time: '25 min' },
    { name: 'Double Chocolate Brownie', price: 109, desc: 'Extra chocolatey brownie with chocolate chips. For the ultimate chocolate lover.', rating: 4.9, time: '25 min' }
  ],
  cookies: [
    { name: 'Chocochip Cookies', price: 359, desc: 'Soft and chewy cookies loaded with chocolate chips. A classic favorite for all ages.', rating: 4.7, time: '25 min' },
    { name: 'Hazelnut Fudge Cookies', price: 379, desc: 'Rich chocolate cookies with hazelnut fudge filling. Nutty and indulgent.', rating: 4.8, time: '25 min' },
    { name: 'Peanut Butter Cookies', price: 359, desc: 'Soft peanut butter cookies with a perfect crumbly texture. Sweet and nutty.', rating: 4.6, time: '25 min' },
    { name: 'Milk Chocolate Cookies', price: 359, desc: 'Buttery cookies with chunks of milk chocolate. Rich and satisfying.', rating: 4.7, time: '25 min' },
    { name: 'Salted Butter Cookies', price: 359, desc: 'Classic butter cookies with a hint of salt. Simple, elegant, and delicious.', rating: 4.6, time: '25 min' },
    { name: 'Almond Cookies', price: 359, desc: 'Crunchy cookies made with real almonds. Nutty flavor with a perfect texture.', rating: 4.7, time: '25 min' }
  ],
  muffins: [
    { name: 'Vanilla', muffin: 300, cupcake: 349, desc: 'Soft vanilla muffin with a light, fluffy texture. Perfect for breakfast or snack.', rating: 4.5, time: '20 min' },
    { name: 'Nutella', muffin: 309, cupcake: 359, desc: 'Rich chocolate muffin swirled with creamy Nutella. A chocolate lover\'s dream.', rating: 4.7, time: '20 min' },
    { name: 'Chocolate', muffin: 309, cupcake: 359, desc: 'Moist chocolate muffin with chocolate chips. Rich and satisfying.', rating: 4.8, time: '20 min' },
    { name: 'Strawberry', muffin: 309, cupcake: 359, desc: 'Sweet strawberry muffin with real fruit pieces. Fresh and fruity.', rating: 4.6, time: '20 min' },
    { name: 'Mix Berry', muffin: 309, cupcake: 359, desc: 'Mixed berry muffin with blueberries, raspberries, and strawberries. Bursting with flavor.', rating: 4.7, time: '20 min' }
  ]
};
