const reducer = (state, action) => {
  switch (action.type) {
    case 'addCode': {
      if (action.payload.parentId === 'root')
        return {
          ...state,
          root: { ...state.root, [action.payload.id]: action.payload },
          all: { ...state.all, [action.payload.id]: action.payload },
        }
      else
        return {
          ...state,
          all: { ...state.all, [action.payload.id]: action.payload },
        }
    }
    default:
      return state
  }
}

export default reducer
