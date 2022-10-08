var sitedata = {
  debug: true,
  state: {
    SiteName: " Sinhalaflix",
    Movies: [
      {
        img:
          "https://ddz4ak4pa3d19.cloudfront.net/cache/d3/1d/d31dddfc92464cf9c92299fe86b7b71b.jpg",
        name: "SPRITE FRIGHT",
        price: 4.99,
        qty: 1,
        show: true,
      },
      {
        img:
          "https://images.moviesanywhere.com/e241e350ba63e112eb2bc4302f62972b/f2263430-e033-410e-a089-efa14fcf39a4.jpg",
        name: "MAMA",
        price: 2.90,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://www.wallpapertip.com/wmimgs/95-954470_despicable-me-2-minions-hd-wallpaper-netflix-despicable.jpg",
        name: "Minions",
        price: 5.0,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://static.startuptalky.com/2020/07/the-pursuit-of-happyness_startuptalky.jpg",
        name: "The Pursuit of Happyness",
        price: 5.99,
        qty: 1,
        show: true,
      },
    ],
    TvShows: [
      {
        name: "Elite",
        img:
          "https://spinninrecords.com/media/cache/header_wide/uploads/media/page/0001/14/thumb_60c668fb8229983e_page_ogimage.jpeg",
        price: 5.99,
        qty: 1,
        show: true,
      },
      {
        img:
          "https://www.whats-on-netflix.com/wp-content/uploads/2017/02/the-100-season-3-netflix.jpg",
        name: "The 100",
        price: 2.90,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://i.pinimg.com/originals/b7/7c/ec/b77cec7281be7c2fc1dd793362927f76.jpg",
        name: "Peaky blinders",
        price: 6.00,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://news.newonnetflix.info/wp-content/uploads/2019/02/umbrella-academy-wide-poster.jpg",
        name: "Umbrella Academy",
        price: 2.99,
        qty: 1,
        show: true,
      },
    ],
    Items: [
      {
        img:
          "https://images.moviesanywhere.com/63766f8889b39eef193ba444260d8b1b/94ef792d-94da-4844-b8fb-3feac84b45c2.jpg",
        name: "Hobbs and shaw",
        price: 3.99,
        qty: 1,
        show: true,
      },
      {
        img:
          "https://m.media-amazon.com/images/M/MV5BODAxYTU2NzQtMTZmZC00YjZlLTlhZjgtYjhlYzJjYzU1Y2M2XkEyXkFqcGdeQXVyMzU2OTkyNTc@._V1_.jpg",
        name: "Alien Expedition",
        price: 1.00,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://i.pinimg.com/originals/f4/86/a1/f486a1e5aea03844d242a50b61c45651.jpg",
        name: "Narcos",
        price: 3.0,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://d2lv662meabn0u.cloudfront.net/boomerang/dynamic/show/00000000/444/1512571160a8034325772208847bee95b8b5b647_1576261399.jpg",
        name: "Scooby-Doo",
        price: 8.99,
        qty: 1,
        show: true,
      },
      {
        img:
          "https://i.pinimg.com/originals/b7/7c/ec/b77cec7281be7c2fc1dd793362927f76.jpg",
        name: "Peaky blinders",
        price: 6.00,
        qty: 1,
        show: true,
      },
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/71AyKoWFP4L._RI_.jpg",
        name: "Orphan",
        price: 2.90,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://www.comingsoon.net/assets/uploads/gallery/army-of-the-dead/army-of-the-dead-1.jpg",
        name: "Army of the Dead",
        price: 4.99,
        qty: 1,
        show: true,
      },

      {
        img:
          "https://www.wallpapertip.com/wmimgs/95-954470_despicable-me-2-minions-hd-wallpaper-netflix-despicable.jpg",
        name: "Minions",
        price: 5.0,
        qty: 1,
        show: true,
      },

      {
        img:
        "https://static.startuptalky.com/2020/07/the-pursuit-of-happyness_startuptalky.jpg",
      name: "The Pursuit of Happyness",
      price: 7.99,
      qty: 1,
      show: true,
      },
    ],
    CartItems: [],
  },


  AddToCart(item) {
    const found = this.state.CartItems.find(
      (element) => element.name == item.name
    );


    //increment qty
    if (found) {
      found.qty = parseInt(found.qty) + parseInt(item.qty);
    }
    //add to cart
    else {
      this.state.CartItems.push({ ...item });
    }
  },

  CalculateTotal() {
    var total = 0;
    for (let index = 0; index < this.state.CartItems.length; index++) {
      const element = this.state.CartItems[index];
      total += element.price * element.qty;
    }
    return parseFloat(total).toFixed(2);
  },

  Remove(item) {
    if (this.debug) console.log("Remove triggered");
    for (let index = 0; index < this.state.CartItems.length; index++) {
      if (this.state.CartItems[index].name == item.name) {
        this.state.CartItems.splice(index, 1);
      }
    }
  },
};

export default sitedata;
