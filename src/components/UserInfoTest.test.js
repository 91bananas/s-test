import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';

import UserInfo from './quote/UserInfo.vue';
import store from '../store';

// A common testing pattern is to create a custom renderer for a specific test
// file. This way, common operations such as registering a Vuex store can be
// abstracted out while avoiding sharing mutable state.
//
// Tests should be completely isolated from one another.
// Read this for additional context: https://kentcdodds.com/blog/test-isolation-with-react
function renderVuexTestComponent(customStore) {
    // Render the component and merge the original store and the custom one
    // provided as a parameter. This way, we can alter some behaviors of the
    // initial implementation.
    return render(UserInfo, { store: { ...store, ...customStore } })
}

test('does user info show a value', () => {
    const { getByTestId, getByText } = renderVuexTestComponent({
        state: {
            "quote": {
                "quoteId": "UP5413263",
                "rating_address": {
                    "line_1": "123 Mulberry Lane",
                    "line_2": "3B",
                    "city": "Brooklyn",
                    "region": "NY",
                    "postal": "11211"
                },
                "policy_holder": {
                    "first_name": "Prairie",
                    "last_name": "Prairie"
                }
            }
        }
    });

    expect(getByTestId('count-value')).toHaveTextContent('1')
})
