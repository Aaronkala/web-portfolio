import { addDecorator } from "@storybook/react";
import Provider from "../src/store/provider";

addDecorator(storyFn => <Provider>{storyFn()}</Provider>);
