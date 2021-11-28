import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, Label } from './styles';

export default () => (
  <TouchableWithoutFeedback>
    <Button>
      <Label>SHUFFLE PLAY</Label>
    </Button>
  </TouchableWithoutFeedback>
);
