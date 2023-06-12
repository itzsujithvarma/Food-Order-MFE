const initialState = {
    items: []
} 
  
  const mealsReducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items];
        const index = updatedItems.findIndex(item => item.id === action.payload.id);
        if (index === -1) {
            updatedItems.push(action.payload);
        }
        else {
            updatedItems[index].count = updatedItems[index].count + action.payload.count;
        }
        return { items: updatedItems }
    }
    return state;
}
  
  export default mealsReducer;
  