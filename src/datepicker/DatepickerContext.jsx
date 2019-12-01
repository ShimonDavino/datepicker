import React from 'react';

const DatepickerContext = React.createContext({ selected: null });

export const DatepickerProvider = DatepickerContext.Provider;
export const DatepickerConsumer = DatepickerContext.Consumer;
export default DatepickerContext;
