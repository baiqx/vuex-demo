function makeAction(type) {
  return ({ commit }, payload) => commit(type, payload);
}

export const addNum = makeAction('ADD');
export const subtractNum = ({ commit }) => {
  setTimeout(() => {
    commit('SUBTRACT');
  }, 1500);
};
