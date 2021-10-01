import NetworkProvider from '../../networks_provider/Network_Provider';
import NetworkConfig from '../../network_config';

// 1. GET body from input
// 2. Parse through API_CALLS d' config {Network_Config, Network_Provider}
// 3. Export DATA from CALLS

// POST IMAGE
const handleImgCreate = async (params) => {
  console.log('2__CredImgCreateSecondly(Repo)__', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPLOAD_IMAGE,
      body: params,
      type: 'file'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e.response);
    throw e;
  }
};

// PUT IMAGE
const handleImgUpdate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPDATE_USER_IMAGE(params.userId),
      body: params,
      type: 'text'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// PUT TEXT
const handleTextUpdate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().UPLOAD_CREDIENTIALS(params.userId),
      body: params,
      type: 'text'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// POST TEXT
const handleTextCreate = async (params) => {
  console.log('secondly', params);
  try {
    var response = await NetworkConfig({
      path: NetworkProvider().CREATE_CREDENTIALS,
      body: params,
      type: 'textpost'
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const CredentialsRepository = {
  handleImgCreate,
  handleImgUpdate,
  handleTextUpdate,
  handleTextCreate
};

export default CredentialsRepository;
