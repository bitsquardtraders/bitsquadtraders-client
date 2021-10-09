import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST DEPOSIT
const createWithdraw = async (params) => {
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().WITHDRAW_TRANSACTION,
      body: params,
      method: 'post'
    });

    return response;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

const WithdrawsRepository = {
  createWithdraw
};

export default WithdrawsRepository;
