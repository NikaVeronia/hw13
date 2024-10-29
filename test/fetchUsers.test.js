import { expect } from 'chai';
import sinon from 'sinon';
import { fetchUsers } from '../fetchUsers.js';

describe('fetchUsers', () => {
  it('should fetch and return users', async () => {
    const mockResponse = [
      { name: 'User 1' },
      { name: 'User 2' },
      { name: 'User 3' }
    ];

    const fetchStub = sinon.stub(global, 'fetch')
      .resolves({ json: () => Promise.resolve(mockResponse) });

    const users = await fetchUsers();

    expect(users).to.deep.equal(mockResponse);

    fetchStub.restore();
  });
});
