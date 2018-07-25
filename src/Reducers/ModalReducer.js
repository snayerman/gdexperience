export const modalReducer = (state = {}, action) => {
   switch (action.type) {
      case 'SPLASH':
      case 'NEW':
         return { type: action.type };
      default:
         return { type: 'SPLASH' };
   }
};