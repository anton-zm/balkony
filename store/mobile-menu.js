export const state = () => ({
  menuShown: true,
  iconIsClicked: false,
});

// change state from here

export const mutations = {
  toggleIcon(state) {
    return (state.menuShown = !state.menuShown);
  },
  toggleMenu(state) {
    return (state.iconIsClicked = !state.iconIsClicked);
  },
};

// get data about my state
export const getters = {
  getMenuShown(state) {
    return state.menuShown;
  },
  geticonIsClicked(state) {
    return state.iconIsClicked;
  },
};
