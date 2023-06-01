import img1 from './img/AIEYEZO.jpg';
import img2 from './img/caucosian.jpg';
import img3 from './img/EYLRIM.jpg';
import img4 from './img/Teumire.jpg';
import img5 from './img/OCCI CHIARI.jpg';
import img6 from './img/Laemzinv.jpg';
import img7 from './img/COASION Classic.jpg';
import img8 from './img/VISOONE .jpg';
import img9 from './img/IBOANN.jpg';
import img10 from './img/Lbsidiety.jpg';



const assetObject = {
	glass: {
	  asset1: {
		image: img1,
		productDisc: 'AIEYEZO Thick Frame Blue Light Glasses Men Women, Fashion Square Computer Eyeglass Anti Eyestrain',
		productPrice: 14
	  },
	  asset2: {
		image: img2,
		productDisc: 'COASION Classic Non-prescription Clear Lens Eyeglasses for Women Thick Square Frame Eyewear',
		productPrice: 15
	  },
	  asset3: {
		image: img3,
		productDisc: 'EYLRIM Classic Thick Square Frame Clear Lens Glasses for Women Men Non Prescription Eyeglasses',
		productPrice: 17
	  },
	  asset4: {
		image: img4,
		productDisc: 'Teumire Classic Fake Nerd Glasses for Women Men Clear Lens Semi Rimless Eyeglasses',
		productPrice: 9
	  },
	  asset5: {
		image: img5,
		productDisc: 'OCCI CHIARI Anti Blue Light Glasses for men - Computer Glasses Men - Black Eyewear Frame - Game Glasses',
		productPrice: 22
	  },
	  asset6: {
		image: img6,
		productDisc: 'Laemzinv Blue Light Glasses for Women, Oversized Square Thick Acetate Frame, for Computer Glasses and Gaming Glasses',
		productPrice: 36
	  },
	  asset7: {
		image: img7,
		productDisc: 'COASION Classic Non-prescription Clear Lens Eyeglasses for Women Thick Square Frame Eyewear',
		productPrice: 99
	  },
	  asset8: {
		image: img8,
		productDisc: 'VISOONE Blue Light Blocking Glasses Rectangle Chic Preppy Look MultiColor Frame for Women Men RIVER',
		productPrice: 43
	  },
	  asset9: {
		image: img9,
		productDisc: 'IBOANN Blue Light Glasses Women Men 3 Pack Anti Eye Strain Computer Gaming',
		productPrice: 52
	  },
	  asset10: {
		image: img10,
		productDisc: 'ILbsidiety Square Inflated Sunglasses for Women Men Trendy Chunky Glasses Thick Frame Y2K Mask Shades UV4',
		productPrice: 6
	  }
	},
	shoe: {
	  asset1: {
		image: shoeImg1,
		productDisc: 'ComfortMax Running Shoes - Lightweight and Cushioned',
		productPrice: 79
	  },
	  asset2: {
		image: shoeImg2,
		productDisc: 'SportsPro Athletic Sneakers - Breathable and Durable',
		productPrice: 99
	  },
	  asset3: {
		image: shoeImg3,
		productDisc: 'FlexFit Walking Shoes - Supportive and Flexible',
		productPrice: 69
	  },
	  asset4: {
		image: shoeImg4,
		productDisc: 'TrekTrail Hiking Boots - Waterproof and Grippy',
		productPrice: 149
	  },
	  asset5: {
		image: shoeImg5,
		productDisc: 'CasualStep Slip-On Shoes - Stylish and Versatile',
		productPrice: 59
	  },
	  asset6: {
		image: shoeImg6,
		productDisc: 'GymMaster Training Shoes - Responsive and Stable',
		productPrice: 89
	  },
	  asset7: {
		image: shoeImg7,
		productDisc: 'ActiveRun Sports Shoes - Dynamic and Supportive',
		productPrice: 109
	  },
	  asset8: {
		image: shoeImg8,
		productDisc: 'UrbanWalk Lifestyle Sneakers - Trendy and Comfortable',
		productPrice: 79
	  },
	  asset9: {
		image: shoeImg9,
		productDisc: 'PowerStride Running Shoes - Energizing and Fast',
		productPrice: 129
	  },
	  asset10: {
		image: shoeImg10,
		productDisc: 'WorkGuard Safety Boots - Protective and Reliable',
		productPrice: 139
	  }
	},
	computer: {
	  asset1: {
		image: computerImg1,
		productDisc: 'TechMaster Gaming Laptop - High Performance and Immersive',
		productPrice: 1899
	  },
	  asset2: {
		image: computerImg2,
		productDisc: 'UltraBook Pro Ultrabook - Slim and Powerful',
		productPrice: 1499
	  },
	  asset3: {
		image: computerImg3,
		productDisc: 'MultiTasker Desktop PC - Versatile and Efficient',
		productPrice: 1299
	  },
	  asset4: {
		image: computerImg4,
		productDisc: 'SmartPad Tablet - Portable and User-Friendly',
		productPrice: 399
	  },
	  asset5: {
		image: computerImg5,
		productDisc: 'WorkStation Pro Workstation - Reliable and Scalable',
		productPrice: 2499
	  },
	  asset6: {
		image: computerImg6,
		productDisc: 'CreativeStudio Laptop - Innovative and Stylish',
		productPrice: 1699
	  },
	  asset7: {
		image: computerImg7,
		productDisc: 'HomeBook All-in-One PC - Sleek and Convenient',
		productPrice: 1099
	  },
	  asset8: {
		image: computerImg8,
		productDisc: 'GamingBeast Gaming Desktop - Beastly Performance',
		productPrice: 2199
	  },
	  asset9: {
		image: computerImg9,
		productDisc: 'ProDesign Graphics Tablet - Precision and Control',
		productPrice: 699
	  },
	  asset10: {
		image: computerImg10,
		productDisc: 'TechSense Laptop - Fast and Reliable',
		productPrice: 1299
	  }
	},
	clothes: {
	  asset1: {
		image: clothesImg1,
		productDisc: 'FashionTrend T-Shirt - Trendy and Comfortable',
		productPrice: 29
	  },
	  asset2: {
		image: clothesImg2,
		productDisc: 'CasualChic Dress - Elegant and Stylish',
		productPrice: 79
	  },
	  asset3: {
		image: clothesImg3,
		productDisc: 'ActiveFit Sports Leggings - Stretchy and Supportive',
		productPrice: 49
	  },
	  asset4: {
		image: clothesImg4,
		productDisc: 'SmartLook Blazer - Sophisticated and Versatile',
		productPrice: 129
	  },
	  asset5: {
		image: clothesImg5,
		productDisc: 'ComfyDenim Jeans - Comfortable and Durable',
		productPrice: 59
	  },
	  asset6: {
		image: clothesImg6,
		productDisc: 'CozyKnit Sweater - Warm and Stylish',
		productPrice: 79
	  },
	  asset7: {
		image: clothesImg7,
		productDisc: 'FormalGlam Evening Gown - Glamorous and Eye-Catching',
		productPrice: 199
	  },
	  asset8: {
		image: clothesImg8,
		productDisc: 'WorkWise Blouse - Professional and Chic',
		productPrice: 59
	  },
	  asset9: {
		image: clothesImg9,
		productDisc: 'SportyVibe Track Jacket - Sporty and Fashionable',
		productPrice: 89
	  },
	  asset10: {
		image: clothesImg10,
		productDisc: 'CasualEssentials Shorts - Comfortable and Versatile',
		productPrice: 39
	  }
	},
	electronics: {
	  asset1: {
		image: electronicsImg1,
		productDisc: 'TechMaster Smart TV - High-Definition and Smart Features',
		productPrice: 999
	  },
	  asset2: {
		image: electronicsImg2,
		productDisc: 'PowerBlast Wireless Speaker - Powerful and Portable',
		productPrice: 149
	  },
	  asset3: {
		image: electronicsImg3,
		productDisc: 'GigaSound Headphones - Immersive Sound and Comfort',
		productPrice: 79
	  },
	  asset4: {
		image: electronicsImg4,
		productDisc: 'SmartHome Security System - Advanced and Easy to Use',
		productPrice: 299
	  },
	  asset5: {
		image: electronicsImg5,
		productDisc: 'PowerBeam Projector - Big Screen Entertainment',
		productPrice: 499
	  },
	  asset6: {
		image: electronicsImg6,
		productDisc: 'ePods True Wireless Earbuds - Wireless Freedom and Clear Sound',
		productPrice: 129
	  },
	  asset7: {
		image: electronicsImg7,
		productDisc: 'SmartWatch Pro - Stylish and Feature-Packed',
		productPrice: 199
	  },
	  asset8: {
		image: electronicsImg8,
		productDisc: 'PowerCharge Power Bank - Portable and High Capacity',
		productPrice: 49
	  },
	  asset9: {
		image: electronicsImg9,
		productDisc: 'UltraCam Digital Camera - Professional-Quality Photos',
		productPrice: 699
	  },
	  asset10: {
		image: electronicsImg10,
		productDisc: 'HomeHub Smart Speaker - Voice-Controlled Home Assistant',
		productPrice: 129
	  }
	}
  };
  


export default assetObject