import React from 'react';
import heroImg from '../assets/image.jpg';

// Import classic cake images
import vanillaImg from '../assets/classic-cakes/Vanilla cake 1.jpg';
import pineappleImg from '../assets/classic-cakes/pineapple 1.png';
import strawberryImg from '../assets/classic-cakes/strawberry cake.png';
import blueberryImg from '../assets/classic-cakes/blueberry.png';
import raspberryImg from '../assets/classic-cakes/Raspberry cake 2.jpg';
import butterscotchImg from '../assets/classic-cakes/Butterscotch 1.jpg';
import chocolateImg from '../assets/classic-cakes/chocolate cake 1.jpg';
import whiteForestImg from '../assets/classic-cakes/White forest 2.jpg';
import blackForestImg from '../assets/classic-cakes/Black forest 4.jpg';

// Import premium cake images
import lycheeImg from '../assets/premium-cakes/Lychee cake 4.jpg';
import tresLechesImg from '../assets/premium-cakes/Rich tres leches cake  1.jpg';
import caramelDelightImg from '../assets/premium-cakes/Caramel delight cake 2.jpg';
import freshFruitImg from '../assets/premium-cakes/Fresh fruit cake 4.jpg';
import veryBerryImg from '../assets/premium-cakes/very berry infused cake 2.jpg';
import belgiumChocolateImg from '../assets/premium-cakes/Belgium chocolate cake 1.jpg';
import redVelvetImg from '../assets/premium-cakes/Red velvet cream cheese 3.jpg';

// Import chef specialty images
import mochaFudgeImg from '../assets/chef-speciality/Mocha Fudge fantasy 3.jpg';
import chocoBerryImg from '../assets/chef-speciality/Choco Berry Burst 4.jpg';
import tiramisuImg from '../assets/chef-speciality/Dreamy Tiramisu 1.jpg';
import rasmalaiImg from '../assets/chef-speciality/Rasmalai Magic 3.jpg';
import bananaBlissImg from '../assets/chef-speciality/Banana Bliss 4.jpg';
import carrotIndulgenceImg from '../assets/chef-speciality/Creamy carrot Indulgence - 3.jpg';
import honeyCharmImg from '../assets/chef-speciality/Golden honey charm 3.jpg';
import apricotPassionImg from '../assets/chef-speciality/Apricot Passion 4.jpg';
import cheesecakeImg from '../assets/chef-speciality/Sugar cloud cheesecake 4.jpg';
import guiltFreeImg from '../assets/chef-speciality/Guilt-Free Goodness - 1.jpg';

// Import brownie images
import classicBrownieImg from '../assets/brownies/Classic Brownie 2.jpg';
import nutellaBrownieImg from '../assets/brownies/Nutella_Brownie_Cinematic.jpg';
import walnutBrownieImg from '../assets/brownies/Walnut_Brownie.jpg';
import biscoffBrownieImg from '../assets/brownies/Biscoff_Brownie_Cinematic.jpg';
import pistachioBrownieImg from '../assets/brownies/Pistachio_Brownie_Cinematic.jpg';
import peanutButterBrownieImg from '../assets/brownies/Peanut_Butter_Brownie_Cinematic.jpg';
import doubleChocolateBrownieImg from '../assets/brownies/Double_Chocolate_Brownie_Cinematic.jpg';

// Import cookie images
import chocochipCookieImg from '../assets/cookies/Chocolate_Chip_Cookies_Cinematic.jpg';
import hazelnutFudgeCookieImg from '../assets/cookies/Hazelnut_Fudge_Cookies_Transparent_Cinematic.jpg';
import peanutButterCookieImg from '../assets/cookies/Peanut_Butter_Cookies_Cinematic.jpg';
import milkChocolateCookieImg from '../assets/cookies/Milk_Chocolate_Cookies_Cinematic (3).jpg';
import saltedButterCookieImg from '../assets/cookies/Salted_Butter_Cookies_Cinematic.jpg';
import almondCookieImg from '../assets/cookies/Almond_Cookies_Cinematic.jpg';

// Import muffin images
import vanillaMuffinImg from '../assets/muffins/Vanilla_Muffins_Cinematic.jpg';
import nutellaMuffinImg from '../assets/muffins/Nutella_Muffins_Cinematic.jpg';
import chocolateMuffinImg from '../assets/muffins/Chocolate_Muffins_Cinematic (1).jpg';
import strawberryMuffinImg from '../assets/muffins/Strawberry_Muffins_Cinematic .jpg';
import mixBerryMuffinImg from '../assets/muffins/Mixed_Berry_Muffins_Cinematic.jpg';

// Create image mapping for classic cakes
const classicCakeImages = {
  'Vanilla Cake': vanillaImg,
  'Pineapple Cake': pineappleImg,
  'Strawberry Cake': strawberryImg,
  'Blueberry Cake': blueberryImg,
  'Raspberry Cake': raspberryImg,
  'Butterscotch Cake': butterscotchImg,
  'Chocolate Cake': chocolateImg,
  'White Forest Cake': whiteForestImg,
  'Black Forest Cake': blackForestImg
};

// Create image mapping for premium cakes
const premiumCakeImages = {
  'Lychee Cake': lycheeImg,
  'Rich Tres Leches Cake': tresLechesImg,
  'Caramel Delight Cake': caramelDelightImg,
  'Fresh Fruit Cake': freshFruitImg,
  'Very Berry Infused Cake': veryBerryImg,
  'Belgium Chocolate Cake': belgiumChocolateImg,
  'Redvelvet Creamcheese Cake': redVelvetImg
};

// Create image mapping for chef specialty items
const chefSpecialtyImages = {
  'Mocha Fudge Fantasy': mochaFudgeImg,
  'Choco Berry Burst': chocoBerryImg,
  'Dreamy Tiramisu': tiramisuImg,
  'Rasmalai Magic': rasmalaiImg,
  'Banana Bliss': bananaBlissImg,
  'Creamy Carrot Indulgence': carrotIndulgenceImg,
  'Golden Honey Charm': honeyCharmImg,
  'Apricot Passion': apricotPassionImg,
  'Sugar Cloud Cheesecake': cheesecakeImg,
  'Guilt-Free Goodness': guiltFreeImg
};

// Create image mapping for brownies
const brownieImages = {
  'Classic Brownie': classicBrownieImg,
  'Nutella Brownie': nutellaBrownieImg,
  'Walnut Brownie': walnutBrownieImg,
  'Biscoff Brownie': biscoffBrownieImg,
  'Pistachio Brownie': pistachioBrownieImg,
  'Peanut Butter Brownie': peanutButterBrownieImg,
  'Double Chocolate Brownie': doubleChocolateBrownieImg
};

// Create image mapping for cookies
const cookieImages = {
  'Chocochip Cookies': chocochipCookieImg,
  'Hazelnut Fudge Cookies': hazelnutFudgeCookieImg,
  'Peanut Butter Cookies': peanutButterCookieImg,
  'Milk Chocolate Cookies': milkChocolateCookieImg,
  'Salted Butter Cookies': saltedButterCookieImg,
  'Almond Cookies': almondCookieImg
};

// Create image mapping for muffins
const muffinImages = {
  'Vanilla': vanillaMuffinImg,
  'Nutella': nutellaMuffinImg,
  'Chocolate': chocolateMuffinImg,
  'Strawberry': strawberryMuffinImg,
  'Mix Berry': mixBerryMuffinImg
};

const ProductCard = ({ item, type }) => {
    const price = type === 'cake' ? item.half : type === 'muffin' ? item.muffin : item.price;
    
    // Get the appropriate image for the item
    const getItemImage = () => {
      if (type === 'cake') {
        // Check for classic cake images first
        if (classicCakeImages[item.name]) {
          return classicCakeImages[item.name];
        }
        // Check for premium cake images
        if (premiumCakeImages[item.name]) {
          return premiumCakeImages[item.name];
        }
      }
      // Check for muffin images (type === 'muffin')
      if (type === 'muffin' && muffinImages[item.name]) {
        return muffinImages[item.name];
      }
      // Check for brownie images (type === 'single')
      if (type === 'single' && brownieImages[item.name]) {
        return brownieImages[item.name];
      }
      // Check for cookie images (type === 'single')
      if (type === 'single' && cookieImages[item.name]) {
        return cookieImages[item.name];
      }
      // Check for chef specialty images (type === 'single')
      if (type === 'single' && chefSpecialtyImages[item.name]) {
        return chefSpecialtyImages[item.name];
      }
      return heroImg; // fallback to hero image
    };

    return (
      <div
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'rgba(107,79,57,0.2)' }}
        className="rounded-2xl overflow-hidden card-hover border shadow-bakery"
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(107,79,57,0.2)')}
      >
        {/* Image */}
        <div className="relative" style={{ height: '180px', backgroundColor: 'var(--color-background)' }}>
          <img src={getItemImage()} alt={item.name} className="w-full h-full object-cover" />
          {/* badge removed per request */}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 style={{ color: 'var(--color-text)' }} className="font-bold text-base leading-tight mr-2">
              {item.name}
            </h4>
          </div>

          {item.desc && (
            <p style={{ color: 'var(--color-text)' }} className="text-sm opacity-70 mb-3 line-clamp-2">
              {item.desc}
            </p>
          )}

          {/* Price Display */}
          <div className="space-y-1">
            {type === 'cake' ? (
              <>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">1/2 kg</span>
                  <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.half}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">1 kg</span>
                  <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.full}</span>
                </div>
              </>
            ) : type === 'muffin' ? (
              <>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">Muffin</span>
                  <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.muffin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">Cupcake</span>
                  <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.cupcake}</span>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{price}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;