export const simpleAction = () => dispatch => {
   dispatch({
      type: 'TEST',
      data: 'test success!'
   })
}