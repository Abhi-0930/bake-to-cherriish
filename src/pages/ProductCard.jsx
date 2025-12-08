import React from 'react';
// import heroImg from '../assets/image.jpg';

// Import classic cake images
import santaCupcakeImg from '../assets/chirstmas-cakes/santa-cupcakes.webp';
import brownieTreeImg from '../assets/chirstmas-cakes/brownie-christmas-trees.webp';
import gingerBreadImg from '../assets/chirstmas-cakes/ginger-bread-cookies.webp';
import plumCakeImg from '../assets/chirstmas-cakes/plum-cake.webp';
import bananaBreadImg from '../assets/chirstmas-cakes/banana-bread.webp';

import vanillaImg from '../assets/classic-cakes/Vanilla cake.webp';
import pineappleImg from '../assets/classic-cakes/Pineapple cake.webp';
import strawberryImg from '../assets/classic-cakes/Strawberry cake.webp';
import blueberryImg from '../assets/classic-cakes/Blueberry cake.webp';
import raspberryImg from '../assets/classic-cakes/Rasberry cake.webp';
import butterscotchImg from '../assets/classic-cakes/Butterscotch cake.webp';
import chocolateImg from '../assets/classic-cakes/Chocolate cake.webp';
import whiteForestImg from '../assets/classic-cakes/White forest cake.webp';
import blackForestImg from '../assets/classic-cakes/Black forest cake.webp';

// Import premium cake images
import lycheeImg from '../assets/premium-cakes/Lyche cake.webp';
import tresLechesImg from '../assets/premium-cakes/Rich tres leches cake.webp';
import caramelDelightImg from '../assets/premium-cakes/Caramel delight cake.webp';
import freshFruitImg from '../assets/premium-cakes/Fresh fruit cake.webp';
import veryBerryImg from '../assets/premium-cakes/Very berry infused cake.webp';
import belgiumChocolateImg from '../assets/premium-cakes/BCC.webp';
import redVelvetImg from '../assets/premium-cakes/Red velvet cake.webp';

// Import chef specialty images
import mochaFudgeImg from '../assets/chef-speciality/Mocha fudge fantasy.webp';
import chocoBerryImg from '../assets/chef-speciality/Choco berry burst.webp';
import tiramisuImg from '../assets/chef-speciality/Dreamy tiramasu.webp';
import rasmalaiImg from '../assets/chef-speciality/Rasmalai magic.webp';
import bananaBlissImg from '../assets/chef-speciality/Banana bliss.webp';
import carrotIndulgenceImg from '../assets/chef-speciality/Creamy carrot indulgence.webp';
import honeyCharmImg from '../assets/chef-speciality/Golden honey charm.webp';
import apricotPassionImg from '../assets/chef-speciality/Apricot passion.webp';
import cheesecakeImg from '../assets/chef-speciality/Sugar cloud cheesecake.webp';
import guiltFreeImg from '../assets/chef-speciality/Guiltfree goodness.webp';

// Import brownie images
import classicBrownieImg from '../assets/brownies/Classic Brownie 2.webp';
import nutellaBrownieImg from '../assets/brownies/Nutella_Brownie_Cinematic.webp';
import walnutBrownieImg from '../assets/brownies/Walnut_Brownie.webp';
import biscoffBrownieImg from '../assets/brownies/Biscoff_Brownie_Cinematic.webp';
import pistachioBrownieImg from '../assets/brownies/Pistachio_Brownie_Cinematic.webp';
import peanutButterBrownieImg from '../assets/brownies/Peanut_Butter_Brownie_Cinematic.webp';
import doubleChocolateBrownieImg from '../assets/brownies/Double_Chocolate_Brownie_Cinematic.webp';

// Import cookie images
import chocochipCookieImg from '../assets/cookies/Chocolate_Chip_Cookies_Cinematic.webp';
import hazelnutFudgeCookieImg from '../assets/cookies/Hazelnut_Fudge_Cookies_Transparent_Cinematic.webp';
import peanutButterCookieImg from '../assets/cookies/Peanut_Butter_Cookies_Cinematic.webp';
import milkChocolateCookieImg from '../assets/cookies/Milk_Chocolate_Cookies_Cinematic.webp';
import saltedButterCookieImg from '../assets/cookies/Salted_Butter_Cookies_Cinematic.webp';
import almondCookieImg from '../assets/cookies/Almond_Cookies_Cinematic.webp';

// Import muffin images
import vanillaMuffinImg from '../assets/muffins/Vanilla_Muffins_Cinematic.webp';
import nutellaMuffinImg from '../assets/muffins/Nutella_Muffins_Cinematic.webp';
import chocolateMuffinImg from '../assets/muffins/Chocolate_Muffins_Cinematic.webp';
import strawberryMuffinImg from '../assets/muffins/Strawberry_Muffins_Cinematic.webp';
import mixBerryMuffinImg from '../assets/muffins/Mixed_Berry_Muffins_Cinematic.webp';

// Create image mapping for christmas cakes
const christmasCakeImages = {
  'Santa Cupcakes': santaCupcakeImg,
  'Brownie Christmas Trees': brownieTreeImg,
  'Ginger Bread Cookies': gingerBreadImg,
  'Plum Cake': plumCakeImg,
  'Banana Bread': bananaBreadImg
};

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
  'Belgian Chocolate Cake': belgiumChocolateImg,
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

const ProductCard = ({ item, type, section }) => {
    const price = type === 'cake' ? item.half : type === 'muffin' ? item.muffin : item.price;
    
    // Get image height based on section
    const getImageHeight = () => {
      if (section === 'christmas') return '250px';
      if (section === 'classic') return '260px';
      if (section === 'premium') return '240px';
      if (section === 'chef') return '240px';
      return '220px'; // default for treats
    };
    
    // Get the appropriate image for the item
    const getItemImage = () => {
      if (type === 'cake') {
        if (christmasCakeImages[item.name]) {
          return christmasCakeImages[item.name];
        }
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
      // return heroImg; // fallback to hero image
    };

    const imgHeight = parseInt(getImageHeight(), 10) || 240;

    return (
      <div
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'rgba(107,79,57,0.2)' }}
        className="rounded-2xl overflow-hidden card-hover border shadow-bakery"
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(107,79,57,0.2)')}
      >
        {/* Image */}
        <div className="relative" style={{ height: getImageHeight(), backgroundColor: 'var(--color-background)' }}>
          <img
            src={getItemImage()}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height={imgHeight}
          />
          
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 style={{ color: 'var(--color-text)' }} className="font-bold text-base leading-tight mr-2">
              {item.name}
            </h4>
            {item.badge && (
              <span
                className="text-[11px] px-2 py-1 rounded-full font-semibold"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-surface)',
                  border: '1px solid rgba(107,79,57,0.15)'
                }}
              >
                {item.badge}
              </span>
            )}
          </div>

          {item.desc && (
            <p style={{ color: 'var(--color-text)' }} className="text-sm opacity-70 mb-3">
              {item.desc}
            </p>
          )}

          {/* Price Display */}
          <div className="space-y-1">
            {type === 'cake' ? (
              item.half && item.full ? (
                <>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                      {item.sizeHalfLabel || '1/2 kg'}
                    </span>
                    <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.half}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                      {item.sizeFullLabel || '1 kg'}
                    </span>
                    <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.full}</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                    {item.packLabel || 'Price'}
                  </span>
                  <span style={{ color: 'var(--color-accent)' }} className="text-base font-bold">₹{item.price}</span>
                </div>
              )
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