import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ColorPanel from '../components/ColorPanel';

const appRouter = (props) => {
  const { colorInfo } = props;
  return (
    <Switch>
      <Route path="/colorpix">
        <ColorPanel info={colorInfo} />
      </Route>
    </Switch>
  );
};

export default appRouter;
