describe('测试Message组件', () => {
  test('应该渲染一个li,类名是list-group-item', () => {
    const message = 'hello word';
    // 渲染组件
    render(<Message message={message} />);
    // 查询组件中是否有li标签
    expect(screen.getByRole('item').nodeName.toLocaleLowerCase()).toBe('li');
    expect(screen.getByRole('item').isEqualNode).toBeTruthy();
    // 判断类名
    expect(screen.getByRole('item').className).toBe('list-group-item');
    // 判断内容
    expect(screen.getByRole('item').textContent).toBe(message);
  });
});
