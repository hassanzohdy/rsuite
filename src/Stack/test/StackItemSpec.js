import React from 'react';
import { render } from '@testing-library/react';
import Stack from '../Stack';
import StackItem from '../StackItem';
import Button from '../../Button';

describe('StackItem', () => {
  it('renders a StackItem', () => {
    const screen = render(
      <Stack>
        <StackItem>stack item</StackItem>
      </Stack>
    );
    expect(screen.getByText('stack item').className).to.include('rs-stack-item');
    expect(screen.getByText('stack item').parentNode.className).to.equal('rs-stack');
  });

  it('renders a StackItem with flex props', () => {
    const screen = render(
      <Stack>
        <StackItem flex="auto" grow={2} alignSelf="flex-end" order={1}>
          stack item
        </StackItem>
      </Stack>
    );
    expect(screen.getByText('stack item').style.flex).to.equal('1 1 auto');
    /**
     * inline css shorthand property will override longhand properties
     */
    expect(screen.getByText('stack item').style.flexGrow).to.equal('1');
    expect(screen.getByText('stack item').style.alignSelf).to.equal('flex-end');
    expect(screen.getByText('stack item').style.order).to.equal('1');
  });

  it('should render a stackitem with custom class name', () => {
    const screen = render(
      <Stack>
        <StackItem className="custom">custom element</StackItem>
      </Stack>
    );

    expect(screen.getByText('custom element').className).to.include('custom');
    expect(screen.getByText('custom element').className).to.include('rs-stack-item');
  });

  it('should render a stackitem as Button', () => {
    const screen = render(
      <Stack>
        <StackItem as={Button}>custom element</StackItem>
      </Stack>
    );

    expect(screen.getByText('custom element').className).to.include('rs-btn');
    expect(screen.getByText('custom element').className).to.include('rs-stack-item');
  });
});
