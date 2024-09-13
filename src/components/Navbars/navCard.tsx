import { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../../styles/navCard.css';

const Navcard = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = [
    {
      label: 'Grocery',
      key: 'grocery',
    },
    {
      label: 'Mobile',
      key: 'mobile',
    },
    {
      label: (
        <span>
          Fashion
        </span>
      ),
      key: 'fashion',
      children: [
        { label: "Men's Top Wear", key: 'men-top-wear' },
        { label: "Men's Bottom Wear", key: 'men-bottom-wear' },
        { label: 'Women Ethnic', key: 'women-ethnic' },
        { label: 'Men Footwear', key: 'footwear' },
        { label: 'Women Footwear', key: 'women-footwear' },
        { label: 'Watch and Accessories', key: 'watch' },
        { label: 'Women Western', key: 'women-western' },
        { label: 'Bags, Suitcase & Luggage', key: 'luggage' },
        { label: 'Kids', key: 'kids' },
        { label: 'Essential', key: 'essential' },
        { label: 'Winter', key: 'winter' },
      ],
    },
    {
      label: (
        <span>
          Electronics
        </span>
      ),
      key: 'electronics',
      children: [
        { label: 'Audio', key: 'audio' },
        { label: 'Electronics GST Store', key: 'gst-store' },
        { label: 'Camera & Accessories', key: 'camera' },
        { label: 'Computer Peripherals', key: 'computer' },
        { label: 'Gaming', key: 'gaming' },
        { label: 'Health & Personal Care', key: 'health' },
        { label: 'Laptop Accessories', key: 'laptop' },
        { label: 'Laptop & Desktop', key: 'desktop' },
        { label: 'Mobile Accessory', key: 'mobile-accessory' },
        { label: 'PowerBanks', key: 'powerbanks' },
        { label: 'Smart Home Automation', key: 'smart-home' },
        { label: 'Smart Wearable', key: 'wearable' },
      ],
    },
    {
      label: (
        <span>
          Home & Furniture
        </span>
      ),
      key: 'home-furniture',
      children: [
        { label: 'Home Furnishing', key: 'home-furnishing' },
        { label: 'Furniture', key: 'furniture' },
        { label: 'Living Room Furniture', key: 'room-furniture' },
        { label: 'Kitchen & Dining', key: 'kitchen' },
        { label: 'Bedroom Furniture', key: 'bedroom' },
        { label: 'Space Saving Furniture', key: 'space-furniture' },
        { label: 'Home Decor', key: 'home-decor' },
        { label: 'Tools & Utility', key: 'tools' },
        { label: 'Work Space Furniture', key: 'work-space' },
        { label: 'Kids Furniture', key: 'kids-furniture' },
        { label: 'Lightings & Electricals', key: 'lighting' },
        { label: 'Cleaning & Bath', key: 'cleaning-bath' },
      ],
    },
    {
      label: 'Appliances',
      key: 'appliances',
    },
    {
      label: 'Travel',
      key: 'travel',
    },
    {
      label: (
        <span>
          Toy & More
        </span>
      ),
      key: 'toy-more',
      children: [
        { label: 'Beauty & Personal Care', key: 'beauty-care' },
        { label: 'Men Grooming', key: 'men-grooming' },
        { label: 'Food & Drink', key: 'food-drink' },
        { label: 'Nutrition & Health Care', key: 'nutrition-health' },
        { label: 'Baby care', key: 'baby-care' },
        { label: 'Toys & School Supplies', key: 'toys-school' },
        { label: 'Sports & Fitness', key: 'sports-fitness' },
        { label: 'Books', key: 'books' },
        { label: 'Music', key: 'music' },
        { label: 'Stationery & Office Supplies', key: 'stationery-office' },
      ],
    },
    {
      label: (
        <span>
          Two Wheelers
        </span>
      ),
      key: 'two-wheeler',
      children: [
        { label: 'Petrol Vehicle', key: 'petrol-vehicle' },
        { label: 'Electric Vehicle', key: 'electric-vehicle' },
      ],
    },
  ];

  return (
    <div className="navcard-wrapper">
      {/* Small Screen */}
      <Button className="navcard-menu-button" type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
      {/* Large Screen */}
      <div className="navcard-item-container-wrapper">
        {/* Horizontal Menu for larger screens */}
        <Menu mode="horizontal" items={menuItems} className="navcard-items-list" />
      </div>
    </div>
  );
};
export default Navcard;
