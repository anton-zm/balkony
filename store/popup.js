export const state = () => ({
  popupShown: false,
  popupShownM: false,
});

// change state from here

export const mutations = {
  togglePopUp(state) {
    return (state.popupShown = !state.popupShown);
  },
  togglePopUpM(state) {
    return (state.popupShownM = !state.popupShownM);
  },
};

// get data about my state
export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
  getPopupShownM(state) {
    return state.popupShownM;
  },
};
