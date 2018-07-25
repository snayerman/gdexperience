export const simpleAction = () => dispatch => {
   dispatch({
      type: 'TEST',
      data: 'test success!'
   })
}

export const selectModal = (type) => dispatch => {
   dispatch({
      type: type
   })
}