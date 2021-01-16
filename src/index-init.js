// import axios from 'axios'
import store from './components/redux/store'
import { testimonials, searchOptions, filters, doctors, illness, guideBoxData } from './components/Database'

export const initializeAllRequests = async () => {
  // console.log('redux initializing')
     await getTestimonials()
     await getSearchOptions()
     await getFilters()
     await getDoctors()
     await getIllness()
     await getGuideBoxData()
//   await getAllCategories()
//   await getAllProducts()
//   axios
//     .get('/auth/user')
//     .then(async res => {
//       //  only fires if user get successfull
//       store.dispatch({ type: 'GET_USER', payload: res.data })
//       await getURI()
//       await getAllReviews()
//       await getUserCart()
//       await getUserWishlist()
//       await getAllOrders()
//       await getCustomOrders()
//       await checkMandate()
//       store.dispatch({ type: 'APP_LOADED' })
//     })
    // .catch(err => {
    //   store.dispatch({ type: 'APP_LOADED' })
    //   // console.log('not logged in or admin', err)
    // })
}

const getTestimonials = () => {
    store.dispatch({ type: 'SET_TESTIMONIALS', payload: testimonials })
}

const getSearchOptions = () => {
    store.dispatch({ type: 'SET_SEARCH_OPTIONS', payload: searchOptions })
}

const getFilters = () => {
    store.dispatch({ type: 'SET_FILTERS', payload: filters })
}

const getDoctors = () => {
    store.dispatch({ type: 'SET_DOCTORS', payload: doctors })
}

const getIllness = () => {
    store.dispatch({ type: 'SET_ILLNESS', payload: illness })
}

const getGuideBoxData = () => {
    store.dispatch({ type: 'SET_GUIDE_DATA', payload: guideBoxData })
}

// const getURI = () => {
//   return axios.get('/auth/login-uri').then(res => {
//     store.dispatch({ type: 'SET_URI', payload: res.data })
//   }).catch(err => {
//     // console.log(err);
//   })
// }

// export const getUserCart = () => {
//   return axios
//     .get('/api/cart')
//     .then(res => {
//       if (res.data) {
//         const filtered = res.data.filter(function (el) {
//           return el != null
//         })
//         store.dispatch({ type: 'SET_CART', payload: filtered })
//       }
//     })
//     .catch(err => {
//       // console.log(err)
//     })
// }

// export const getUserWishlist = () => {
//   return axios
//     .get('/auth/wishlist')
//     .then(res => {
//       if (res.data) {
//         store.dispatch({ type: 'SET_WISHLIST', payload: res.data })
//       }
//     })
//     .catch(err => {
//       // console.log(err)
//     })
// }

// const categories = [
//   'Flower',
//   'Edibles',
//   'Tinctures',
//   'Concentrates',
//   'Topicals',
//   'Pet Products',
//   'Accessories',
// ]

// const getAllCategories = () => {
//   store.dispatch({ type: 'SET_CATEGORIES', payload: categories })
  // return axios
  //   .get('/api/products/categories')
  //   .then(res => {
  //     // console.log('categories here', res.data)
  //   store.dispatch({ type: 'SET_CATEGORIES', payload: res.data })
  // })
  // .catch(err => {
  //   // console.log(err)
  // })
// }

// export const getAllProducts = () => {
//   return axios
//     .get('/api/products/all')
//     .then(res => {
//       // console.log(res)
//       store.dispatch({ type: 'ADD_ALL_PRODUCTS', payload: res.data })
//     })
//     .catch(err => {
//       // console.log(err)
//     })
// }

// export const getAllReviews = () => {

//   return axios
//     .get('/api/reviews/all')
//     .then(res => {
//       store.dispatch({ type: 'ADD_REVIEWS', payload: res.data })
//     })
//     .catch(err => {
//       // console.log(err)
//     })
// }

// export const getAllOrders = () => {
//   //get all orders from user
//   return axios
//     .get('/api/orders/from')
//     .then(res => {
//       store.dispatch({ type: 'ADD_ORDERS', payload: res.data })
//     })
//     .catch(err => {
//       // console.log(err)
//     })
// }

// export const getCustomOrders = () => {
//   return axios.get('/api/orders/custom')
//   .then(res => {
//     store.dispatch({ type: 'GET_CUSTOM', payload: res.data[0]})
//   })
//   .catch(err => {
//     console.log(err);
    
//   })
// }

// export const checkMandate = () => {
//   axios
//     .get('/api/gc/checkClientMandate')
//     .then(res => {
//       if (res.data) {
//         store.dispatch({
//           type: 'YES_MANDATE'
//         })
//       }
//     })
//     .catch(err => {
//       // console.log(err);
//     })
// }
