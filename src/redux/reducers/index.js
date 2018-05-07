/**
 * 用来combine所有reducer并暴露出去
 */

const initState = {
  a:123
}

export const common = ( state = initState, action ) => {
  switch (action.type) {
    case 'ABC':
      return state
    default:
      return state
  }
}