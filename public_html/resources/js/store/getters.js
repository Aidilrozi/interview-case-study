export const productGetters = {
    // allId: state => state.products.result,
    // entities: state => state.products.entities,
    allProducts: (state, getters) => {
      return state.products
      // const result = getters.allId
      // const entities = getters.entities
      //
      // return result.map(r => {
      //   const product = entities.products[r]
      //   // if (typeof product.manufacturer === Object) return
      //   console.log(entities.products[r], product.manufacturer)
      //   product.manufacturer = entities.manufacturer[product.manufacturer]
      //   return product
      // })
    },
    productById: (state, getters) => id => {
       
       
      if (getters.allProducts.length > 0) {
        console.log(getters.allProducts.filter(p => p.id == id))
        return getters.allProducts.filter(p => p.id == id)[0]
      } else {
        return state.product
      }
    },
    allManufacturers: state => {
      return state.manufacturers
    }
  }
  
  export const manufacturerGetters = {
    allManufacturers: state => state.manufacturers
  }