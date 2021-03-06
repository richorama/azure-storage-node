// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata0?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8862fc80-001a-0019-4d31-a3ecdf000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:21:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata0?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:21:58 GMT',
  etag: '"0x8D1D6A86593AC6E"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '85f964c2-001a-0022-1785-03e46c000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:21:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata0?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:21:58 GMT',
  etag: '"0x8D1D6A86593AC6E"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b69c5bc-001a-003f-0a95-2e6f9b000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:21:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata0?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:21:58 GMT',
  etag: '"0x8D1D6A86593AC6E"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '54e69a1c-001a-000c-4301-b3c682000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:21:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata0?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5097d6b1-001a-003d-7659-46b95a000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:00 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata1?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dbc5b1d2-001a-001e-4c13-0c6243000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:01 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata2?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:02 GMT',
  etag: '"0x8D1D6A867FD7BDA"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e750cad2-001a-0027-4aff-b06313000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata2?restype=share')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ShareAlreadyExists</Code><Message>The specified share already exists.\nRequestId:94992ee8-001a-0044-1ada-4d2384000000\nTime:2014-11-25T09:22:02.7079662Z</Message></Error>", { 'content-length': '222',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '94992ee8-001a-0044-1ada-4d2384000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata2?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e1506148-001a-0039-5913-84ceda000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata2?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ee725b4b-001a-0042-5c90-b3c7df000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:04 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata3?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ffc26953-001a-004b-0dc3-8f92c9000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata3?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:05 GMT',
  etag: '"0x8D1D6A869C9C8C7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '127acb5e-001a-0018-6472-4ec405000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:05 GMT',
  etag: '"0x8D1D6A869C9C8C7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9ad9ce92-001a-0021-3dae-bff170000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:05 GMT',
  etag: '"0x8D1D6A869C9C8C7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92d4d761-001a-002a-779f-93314a000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata3?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '85f46c15-001a-0033-4c6f-1012c6000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata3?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '685405e2-001a-0014-3df5-2490f3000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata3?restype=share')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ShareBeingDeleted</Code><Message>The specified share is being deleted. Try operation later.\nRequestId:4d2aebd3-001a-0045-2eeb-ec6c89000000\nTime:2014-11-25T09:22:09.1810986Z</Message></Error>", { 'content-length': '244',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4d2aebd3-001a-0045-2eeb-ec6c89000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata3?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '99fc35e9-001a-003a-7e9e-8754d0000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata4?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '47f49372-001a-0007-6109-21c83e000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata5?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e2bceb45-001a-0038-6c15-d6139b000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata5?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1ff365bb-001a-0005-581f-c0baca000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata5?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:13 GMT',
  etag: '"0x8D1D6A86E5D174F"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b7f35e5-001a-000e-7548-28bf40000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata5?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:13 GMT',
  etag: '"0x8D1D6A86E5D174F"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '04115200-001a-0017-2eba-0cf02d000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata5?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3bf42ab3-001a-0034-538b-166de6000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata5?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '24becfea-001a-0029-684e-6b3168000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata5?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '16a0d899-001a-0040-66fb-05f90d000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata6?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b30193b7-001a-0049-4cff-6039ea000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata7?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'db27e025-001a-0016-1f1e-e7f562000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata7?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:18 GMT',
  etag: '"0x8D1D6A87171DE95"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ff9e180f-001a-000b-62ea-0b9275000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata7?restype=share&comp=metadata')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:19 GMT',
  etag: '"0x8D1D6A871EE0792"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8add7db2-001a-0028-59b4-1ca5d9000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata7?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:19 GMT',
  etag: '"0x8D1D6A871EE0792"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3d8badf5-001a-0031-6cc2-bf7972000000',
  'x-ms-version': '2014-02-14',
  'x-ms-meta-color': 'blue',
  date: 'Tue, 25 Nov 2014 09:22:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata7?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7f95ec74-001a-0012-6e47-530de4000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata7?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4b292de5-001a-001b-0138-c3edc6000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:20 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata8?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e1388c0c-001a-004c-01bf-dcea78000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata8?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:22 GMT',
  etag: '"0x8D1D6A8742EF665"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4b400cfc-001a-002d-2c66-d1b0bd000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata8?restype=share&comp=metadata')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:23 GMT',
  etag: '"0x8D1D6A8749E4510"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9328ecab-001a-0036-20fa-052019000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata8?restype=share&comp=metadata')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:23 GMT',
  etag: '"0x8D1D6A8749E4510"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '12b0a545-001a-002b-5cfe-c4caeb000000',
  'x-ms-version': '2014-02-14',
  'x-ms-meta-class': 'test',
  date: 'Tue, 25 Nov 2014 09:22:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata8?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9cc806ca-001a-0020-773d-0ba022000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata8?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '01156a00-001a-0001-1a13-f9edd8000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:25 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata9?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '91c67f44-001a-0032-688d-9d2840000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:26 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata11?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:27 GMT',
  etag: '"0x8D1D6A876CC6353"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ad719c33-001a-0013-3fb3-fcf7e2000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata12?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:27 GMT',
  etag: '"0x8D1D6A877393D46"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '01b14e23-001a-0008-19c2-54435d000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata13?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:28 GMT',
  etag: '"0x8D1D6A877DD45B8"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4cb0cdb9-001a-004d-0ec6-ff4725000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/share-test-share-testdata14?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 25 Nov 2014 09:22:29 GMT',
  etag: '"0x8D1D6A87833B168"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'eecbdb51-001a-001a-7d2d-6b42f3000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/?comp=list&maxresults=3&include=metadata&prefix=share-test-share-')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.file.core.windows.net/\"><Prefix>share-test-share-</Prefix><MaxResults>3</MaxResults><Shares><Share><Name>share-test-share-testdata11</Name><Properties><Last-Modified>Tue, 25 Nov 2014 09:22:27 GMT</Last-Modified><Etag>\"0x8D1D6A876CC6353\"</Etag></Properties><Metadata><color>orange</color><sharenumber>01</sharenumber><somemetadataname>SomeMetadataValue</somemetadataname></Metadata></Share><Share><Name>share-test-share-testdata12</Name><Properties><Last-Modified>Tue, 25 Nov 2014 09:22:27 GMT</Last-Modified><Etag>\"0x8D1D6A877393D46\"</Etag></Properties><Metadata><color>pink</color><sharenumber>02</sharenumber><somemetadataname>SomeMetadataValue</somemetadataname></Metadata></Share><Share><Name>share-test-share-testdata13</Name><Properties><Last-Modified>Tue, 25 Nov 2014 09:22:28 GMT</Last-Modified><Etag>\"0x8D1D6A877DD45B8\"</Etag></Properties><Metadata><color>brown</color><sharenumber>03</sharenumber><somemetadataname>SomeMetadataValue</somemetadataname></Metadata></Share></Shares><NextMarker>/xplat/share-test-share-testdata14</NextMarker></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ea170647-001a-0023-28b9-c8cf96000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/?comp=list&maxresults=3&include=metadata&marker=%2Fxplat%2Fshare-test-share-testdata14&prefix=share-test-share-')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.file.core.windows.net/\"><Prefix>share-test-share-</Prefix><Marker>/xplat/share-test-share-testdata14</Marker><MaxResults>3</MaxResults><Shares><Share><Name>share-test-share-testdata14</Name><Properties><Last-Modified>Tue, 25 Nov 2014 09:22:29 GMT</Last-Modified><Etag>\"0x8D1D6A87833B168\"</Etag></Properties><Metadata><color>blue</color><sharenumber>04</sharenumber><somemetadataname>SomeMetadataValue</somemetadataname></Metadata></Share></Shares><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ed5feb4c-001a-002c-26e9-1faf18000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata12?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ebd59536-001a-0002-4e24-4fc962000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata11?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '704e2ab3-001a-0035-5327-af55e1000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata14?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '945be469-001a-0000-5072-1055fd000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .delete('/share-test-share-testdata13?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c6e53db5-001a-0047-74c4-29b2f9000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata10?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '61d968c6-001a-001d-2afb-d62bbe000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:32 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.file.core.windows.net/\"><Shares><Share><Name>fileshare101</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:55 GMT</Last-Modified><Etag>\"0x8D1C6B8A3315B27\"</Etag></Properties></Share><Share><Name>fileshare102</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:55 GMT</Last-Modified><Etag>\"0x8D1C6B8A35D7558\"</Etag></Properties></Share><Share><Name>fileshare103</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:55 GMT</Last-Modified><Etag>\"0x8D1C6B8A38A04BC\"</Etag></Properties></Share><Share><Name>fileshare110</Name><Properties><Last-Modified>Wed, 05 Nov 2014 04:48:52 GMT</Last-Modified><Etag>\"0x8D1C6CAEEA1FDE9\"</Etag></Properties></Share><Share><Name>fileshare112</Name><Properties><Last-Modified>Wed, 05 Nov 2014 04:48:53 GMT</Last-Modified><Etag>\"0x8D1C6CAEEFA08F9\"</Etag></Properties></Share><Share><Name>fileshare217</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:41:45 GMT</Last-Modified><Etag>\"0x8D1C6B92CA448F9\"</Etag></Properties></Share><Share><Name>fileshare227</Name><Properties><Last-Modified>Wed, 05 Nov 2014 04:52:50 GMT</Last-Modified><Etag>\"0x8D1C6CB7C6EA6A9\"</Etag></Properties></Share><Share><Name>fileshare81</Name><Properties><Last-Modified>Fri, 14 Nov 2014 16:13:33 GMT</Last-Modified><Etag>\"0x8D1CE3D128DD315\"</Etag></Properties></Share><Share><Name>fileshare85</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:50 GMT</Last-Modified><Etag>\"0x8D1C6B8A06ECDB1\"</Etag></Properties></Share><Share><Name>fileshare90</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:51 GMT</Last-Modified><Etag>\"0x8D1C6B8A14B50A6\"</Etag></Properties></Share><Share><Name>fileshare92</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:52 GMT</Last-Modified><Etag>\"0x8D1C6B8A1A3D32A\"</Etag></Properties></Share><Share><Name>fileshare94</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:52 GMT</Last-Modified><Etag>\"0x8D1C6B8A1FC2E9D\"</Etag></Properties></Share><Share><Name>fileshare95</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:53 GMT</Last-Modified><Etag>\"0x8D1C6B8A22821BD\"</Etag></Properties></Share><Share><Name>fileshare96</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:53 GMT</Last-Modified><Etag>\"0x8D1C6B8A25462FF\"</Etag></Properties></Share><Share><Name>fileshare98</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:54 GMT</Last-Modified><Etag>\"0x8D1C6B8A2ACBE72\"</Etag></Properties></Share><Share><Name>fileshare99</Name><Properties><Last-Modified>Wed, 05 Nov 2014 02:37:54 GMT</Last-Modified><Etag>\"0x8D1C6B8A2D8D8A3\"</Etag></Properties></Share><Share><Name>share-008756b0-7476-11e4-86d4-77a8bf540649</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:38:11 GMT</Last-Modified><Etag>\"0x8D1D699E5E10ACF\"</Etag></Properties></Share><Share><Name>share-05a0a500-5f1a-11e4-82d1-cde58f15c2f5</Name><Properties><Last-Modified>Wed, 29 Oct 2014 03:16:50 GMT</Last-Modified><Etag>\"0x8D1C13DEA8D950C\"</Etag></Properties></Share><Share><Name>share-05d4a9b0-6e36-11e4-9cf6-997a625331a1</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:45:04 GMT</Last-Modified><Etag>\"0x8D1D059EAF626D2\"</Etag></Properties></Share><Share><Name>share-07a6d4d0-6e3a-11e4-b461-cd16fe35e7ef</Name><Properties><Last-Modified>Mon, 17 Nov 2014 09:13:45 GMT</Last-Modified><Etag>\"0x8D1D05DEC95ABF7\"</Etag></Properties></Share><Share><Name>share-083068d0-5fe4-11e4-9b49-8bb679653fa0</Name><Properties><Last-Modified>Thu, 30 Oct 2014 03:22:52 GMT</Last-Modified><Etag>\"0x8D1C207EC73798A\"</Etag></Properties></Share><Share><Name>share-0be776a0-6e38-11e4-a6ce-07d81db71e06</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:59:33 GMT</Last-Modified><Etag>\"0x8D1D05BF0EA0249\"</Etag></Properties></Share><Share><Name>share-0e7aad20-6a31-11e4-bd87-7568e7bd01ac</Name><Properties><Last-Modified>Wed, 12 Nov 2014 05:59:27 GMT</Last-Modified><Etag>\"0x8D1CC54F39A9C39\"</Etag></Properties></Share><Share><Name>share-10324680-5f20-11e4-94bf-c379fc4bcfdd</Name><Properties><Last-Modified>Wed, 29 Oct 2014 04:00:06 GMT</Last-Modified><Etag>\"0x8D1C143F5F1C099\"</Etag></Properties></Share><Share><Name>share-107161c0-47bb-11e4-aa74-cb11cc05960b</Name><Properties><Last-Modified>Mon, 29 Sep 2014 09:29:09 GMT</Last-Modified><Etag>\"0x8D1A9DEF558313F\"</Etag></Properties></Share><Share><Name>share-1c3688e0-7471-11e4-ac7d-d90b63fadb4b</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:03:09 GMT</Last-Modified><Etag>\"0x8D1D695014C408B\"</Etag></Properties></Share><Share><Name>share-1d61a540-6e38-11e4-bc1e-59a28136fa26</Name><Properties><Last-Modified>Mon, 17 Nov 2014 09:00:03 GMT</Last-Modified><Etag>\"0x8D1D05C029FE86B\"</Etag></Properties></Share><Share><Name>share-1e896e50-6e36-11e4-be1c-5ded03cd03a0</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:45:46 GMT</Last-Modified><Etag>\"0x8D1D05A040F5A1B\"</Etag></Properties></Share><Share><Name>share-20e7e970-5f1c-11e4-8297-6bd035d7d705</Name><Properties><Last-Modified>Wed, 29 Oct 2014 03:31:56 GMT</Last-Modified><Etag>\"0x8D1C140062EB106\"</Etag></Properties></Share><Share><Name>share-2478d5e0-6a34-11e4-9da9-c978ce7440bd</Name><Properties><Last-Modified>Wed, 12 Nov 2014 06:21:32 GMT</Last-Modified><Etag>\"0x8D1CC5809BFAACB\"</Etag></Properties></Share><Share><Name>share-2ac91cb0-6e36-11e4-98a0-e9e75607a781</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:46:06 GMT</Last-Modified><Etag>\"0x8D1D05A0FE7D936\"</Etag></Properties></Share><Share><Name>share-35e8d2b0-6a31-11e4-81f2-2d9d9f9ab5c0</Name><Properties><Last-Modified>Wed, 12 Nov 2014 06:00:32 GMT</Last-Modified><Etag>\"0x8D1CC551AC307B6\"</Etag></Properties></Share><Share><Name>share-37bd40e0-5f36-11e4-96d4-19bac84b63f4</Name><Properties><Last-Modified>Wed, 29 Oct 2014 06:38:40 GMT</Last-Modified><Etag>\"0x8D1C15A1C933065\"</Etag></Properties></Share><Share><Name>share-42e24260-5f34-11e4-9de1-f52f447bbbb3</Name><Properties><Last-Modified>Wed, 29 Oct 2014 06:24:41 GMT</Last-Modified><Etag>\"0x8D1C15828459FAE\"</Etag></Properties></Share><Share><Name>share-4bfee540-7471-11e4-8362-5b2d9d1cc567</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:04:29 GMT</Last-Modified><Etag>\"0x8D1D69530D84876\"</Etag></Properties></Share><Share><Name>share-50b73080-6015-11e4-b7a0-1b4f88a18d92</Name><Properties><Last-Modified>Thu, 30 Oct 2014 09:15:39 GMT</Last-Modified><Etag>\"0x8D1C239354BBA55\"</Etag></Properties></Share><Share><Name>share-51753d60-439a-11e4-8295-957efd8d49d7</Name><Properties><Last-Modified>Wed, 24 Sep 2014 03:24:40 GMT</Last-Modified><Etag>\"0x8D1A5BE36461DFB\"</Etag></Properties></Share><Share><Name>share-552218b0-5f39-11e4-9ec5-9382fcc31947</Name><Properties><Last-Modified>Wed, 29 Oct 2014 07:00:58 GMT</Last-Modified><Etag>\"0x8D1C15D3A2840EF\"</Etag></Properties></Share><Share><Name>share-554d5be0-6e36-11e4-a69c-df0f3bd43f4b</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:47:18 GMT</Last-Modified><Etag>\"0x8D1D05A3AB36776\"</Etag></Properties></Share><Share><Name>share-592156a0-5f35-11e4-93d9-77ed8281ee2e</Name><Properties><Last-Modified>Wed, 29 Oct 2014 06:32:27 GMT</Last-Modified><Etag>\"0x8D1C1593E390089\"</Etag></Properties></Share><Share><Name>share-62fdd850-6e36-11e4-973b-5ff9beb86e52</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:47:40 GMT</Last-Modified><Etag>\"0x8D1D05A48061E33\"</Etag></Properties></Share><Share><Name>share-67828150-7471-11e4-92d4-7b6ba3191401</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:05:15 GMT</Last-Modified><Etag>\"0x8D1D6954C6CB114\"</Etag></Properties></Share><Share><Name>share-6aa2d040-583a-11e4-bf6b-c1aedfa610f5</Name><Properties><Last-Modified>Mon, 20 Oct 2014 09:21:17 GMT</Last-Modified><Etag>\"0x8D1BA5E5694022F\"</Etag></Properties></Share><Share><Name>share-6ee385d0-5f4e-11e4-aa69-cb5c99cab407</Name><Properties><Last-Modified>Wed, 29 Oct 2014 09:32:01 GMT</Last-Modified><Etag>\"0x8D1C17253FE23EC\"</Etag></Properties></Share><Share><Name>share-79e6f0b0-6a30-11e4-8150-815e02969e0b</Name><Properties><Last-Modified>Wed, 12 Nov 2014 05:55:18 GMT</Last-Modified><Etag>\"0x8D1CC545F1124AD\"</Etag></Properties></Share><Share><Name>share-7fcfbbc0-6e35-11e4-8ae6-9d81266c6069</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:41:20 GMT</Last-Modified><Etag>\"0x8D1D0596575BA02\"</Etag></Properties></Share><Share><Name>share-85082ef0-7471-11e4-8a90-c5514213b01c</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:06:05 GMT</Last-Modified><Etag>\"0x8D1D6956A12CB7C\"</Etag></Properties></Share><Share><Name>share-89e5ac50-6e35-11e4-929a-3b11066098f7</Name><Properties><Last-Modified>Mon, 17 Nov 2014 08:41:36 GMT</Last-Modified><Etag>\"0x8D1D0596ED40371\"</Etag></Properties></Share><Share><Name>share-8ee5afd0-5b56-11e4-9a48-3f22d956ea9b</Name><Properties><Last-Modified>Fri, 24 Oct 2014 08:20:05 GMT</Last-Modified><Etag>\"0x8D1BD7A739F73A6\"</Etag></Properties></Share><Share><Name>share-92f1a460-5f36-11e4-aa41-59f8693885ca</Name><Properties><Last-Modified>Wed, 29 Oct 2014 06:41:13 GMT</Last-Modified><Etag>\"0x8D1C15A77D3CB79\"</Etag></Properties></Share><Share><Name>share-d716d170-7475-11e4-9067-b5ab7b8f2ce7</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:37:00 GMT</Last-Modified><Etag>\"0x8D1D699BC062AAF\"</Etag></Properties></Share><Share><Name>share-d733e470-7477-11e4-bd29-037d6121675f</Name><Properties><Last-Modified>Tue, 25 Nov 2014 07:51:20 GMT</Last-Modified><Etag>\"0x8D1D69BBC2F7CC5\"</Etag></Properties></Share><Share><Name>test</Name><Properties><Last-Modified>Tue, 11 Nov 2014 02:47:28 GMT</Last-Modified><Etag>\"0x8D1CB70F763ADA0\"</Etag></Properties></Share></Shares><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '727807c9-001a-0025-456e-7a7532000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata15?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4d623593-001a-002f-085d-6567fb000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:32 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/?comp=list&prefix=%E4%B8%AD%E6%96%87')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.file.core.windows.net/\"><Prefix>中文</Prefix><Shares /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bd25de02-001a-000f-3304-824fd7000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/share-test-share-testdata16?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5427207-001a-0041-1502-2b84d0000000',
  'x-ms-version': '2014-02-14',
  date: 'Tue, 25 Nov 2014 09:22:34 GMT' });
 return result; }]];