const reducer = (state, action) => {
  switch (action.type) {
    case 'addCode': {
      console.log(action.payload)
      if (!action.payload.parentId)
        return {
          ...state,
          root: { ...state.root, [action.payload.id]: action.payload },
          all: { ...state.all, [action.payload.id]: action.payload },
        }
      else {
        state.all[action.payload.parentId]?.children.push(action.payload)
        return {
          ...state,
          all: { ...state.all, [action.payload.id]: { ...action.payload } },
        }
      }
    }
    default:
      return state
  }
}

export default reducer
