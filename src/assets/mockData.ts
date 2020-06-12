import Mock from 'mockjs';

export function mockInitial() {
  Mock.setup({
    timeout: '100-300'
  })
  const mockData = {
    data: []
  };
  const sucsData = {
    message: 'success'
  };
  const detailData = {
    id: 1,
    name: '@name'
  };
  const searchData = {
    'list|1-10':[{
      'id|+1': 1,
      name: '@name'
    }]
  };
  for (let i = 0 ; i < 10 ; i++){
    mockData.data.push({
      id: i + 10,
      name: '@name'
    });
  }
  let count = 10;
  Mock.mock('api/heroes', mockData);
  Mock.mock('api/heroes/add', 'post', () => {
    count++
    const data = {
      id: count,
      name: ''
    };
    return data;
  });
  Mock.mock(RegExp(/api\/heroes\/delete\/1[0-9]/), sucsData);
  Mock.mock(RegExp(/api\/heroes\/detail\/1[0-9]/), detailData);
  Mock.mock(RegExp(/api\/heroes\/search\/./), searchData);
}
