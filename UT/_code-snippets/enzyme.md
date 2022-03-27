
## Find item in list and click it
```
  it('Will select item on Enter keypress', () => {
    wrapper = mount(
      <Dropdown
        options={[
          { key: '1', text: '1', selected: true },
          { key: '2', text: '2' },
        ]}
        multiSelect
      />,
    );
    // open  the dropdown
    wrapper.find('.ms-Dropdown').simulate('click');

    // enter on itme 2
    const secondItemElement = wrapper.find('.ms-Dropdown-item').at(1);
    secondItemElement.simulate('keydown', { which: KeyCodes.enter });

    const titleElement = wrapper.find('.ms-Dropdown-title');
    expect(titleElement.text()).toEqual('1, 2');
  });
```