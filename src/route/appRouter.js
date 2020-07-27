import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ColorPanel from '../components/ColorPanel';
import DefaultPanel from '../components/DefaultPanel';

const appRouter = (props) => {
  const { colorInfo } = props;
  return (
    <Switch>
      <Route path="/colorpix">
        <ColorPanel info={colorInfo} />
      </Route>
      <Route path="/" exact>
        <DefaultPanel />
      </Route>
    </Switch>
  );
};

export default appRouter;
