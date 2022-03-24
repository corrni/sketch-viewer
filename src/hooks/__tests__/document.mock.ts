import { GET_SHARED_DOCUMENT } from 'hooks/getSharedDocument.graphql';

const queryPayload = {
  data: {
    share: {
      __typename: 'Share',
      identifier: 'e981971c-ff57-46dc-a932-a60dc1804992',
      version: {
        __typename: 'Version',
        document: {
          __typename: 'Document',
          artboards: {
            __typename: 'Artboards',
            entries: [
              {
                __typename: 'Artboard',
                files: [
                  {
                    __typename: 'File',
                    height: 808,
                    scale: 1,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1648411200&Signature=rusPZzsbAPDakidehtrNFxuQJkJ~teI6AKPRClz2zqrDvE2WkemAuRpt6bX6-3ziCus8O64hUSE9dCpe00X0r3FZkqhZ0CIFsQJXHCpJecnK6g7p1dQ9k1mvIUg1ljNg95UojJKQ4wBBl5F5eKhl5uO0AdvSCGxhPStgCwGp~UA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/abbb4734-7963-414c-8f09-108988579905/shares/abbb4734-7963-414c-8f09-108988579905.m.png?expires=1648684800&s=54ccc10de1bd6b6e8b4a6488f6cc19cf3c67fa90c823dd2bc07c6a8c504b62a9',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1648411200&Signature=rusPZzsbAPDakidehtrNFxuQJkJ~teI6AKPRClz2zqrDvE2WkemAuRpt6bX6-3ziCus8O64hUSE9dCpe00X0r3FZkqhZ0CIFsQJXHCpJecnK6g7p1dQ9k1mvIUg1ljNg95UojJKQ4wBBl5F5eKhl5uO0AdvSCGxhPStgCwGp~UA_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 606,
                  },
                  {
                    __typename: 'File',
                    height: 1616,
                    scale: 2,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/0654252f-9f8c-4d43-ad08-b556f7232641/shares/0654252f-9f8c-4d43-ad08-b556f7232641.l.png?expires=1648684800&s=b1af096861760686dce3efbd8d80949b327ef5c84582b94b2af0a0c26facd936',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/0654252f-9f8c-4d43-ad08-b556f7232641/shares/0654252f-9f8c-4d43-ad08-b556f7232641.m.png?expires=1648684800&s=49e89f991235711b7e258d71b19c3285cbaa39c9b474136ce9ffd11d508924fb',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/0654252f-9f8c-4d43-ad08-b556f7232641.png?Expires=1648411200&Signature=WQmW5lle7btPop7nT5QQUcqmQpnrw-IHgeblB6nQmBs2aYmvIVboC7DA3YDEqUy0g9Rs5uHSC6Wt8yXDvqailXiMtc8iFpHsTKK~SdE7ky9w7YvU9zsOsIS8kMHuM7icVtSDdYtE89ptPftRZ5TUQRE2X-MHPokvOPvn2yELh9s_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 1212,
                  },
                ],
                isArtboard: true,
                name: 'Xerox alto',
                shortId: 'qQQ1Z72',
              },
              {
                __typename: 'Artboard',
                files: [
                  {
                    __typename: 'File',
                    height: 880,
                    scale: 1,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c/shares/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.l.png?expires=1648684800&s=db0d6e71f42a3f7b189040b0af0150e0b50cb0a711fd8c3b8b84b5adfdb662e3',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c/shares/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.m.png?expires=1648684800&s=fcf1182a260dd21dff1361b4d2c6299d46934713f97adb8bfc1e2cf289a4f714',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.png?Expires=1648411200&Signature=VmcpYDZoCHdZgNdMuFAMuQ5ToEWMDUYkQo1p0E9YoRpMSUDu9fbN4D7QoVVl0kwNDtR91doCEN8hNeJlTSzsnTfS3s8SNrBvsjtryQfUpV4tnmp4F5C~wccOHlnHPswe8mvi2wiV~sH0~0WUFDmLKDXWPpuafT~tZ6ptMCF4l0I_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 1077,
                  },
                  {
                    __typename: 'File',
                    height: 1760,
                    scale: 2,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64/shares/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64.l.png?expires=1648684800&s=a83d5de375c39b451066df6f89405df7af72c79c59f96b2a04905693f60b5d6c',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64/shares/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64.m.png?expires=1648684800&s=c54e9e59e147251052cdf4b1dd69377025c71672bfb09f298b2487873a855d14',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64.png?Expires=1648411200&Signature=i4VmKcSB1aBek~KpqB9DwhUKGBVxIAKnJyeCXDEsLFsndFQ4-3elh4KJ3DbhuooPSMw8ZPJc3VR0KXehe8hsidXWloyhQ6uWB02GSe819DK33g67V9clAkFnIaByz~Rg3jQLTRgkJYd6qGPzpGvOcbnPghpHw4EI90BBVDL4NpQ_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 2154,
                  },
                ],
                isArtboard: true,
                name: 'Etch a Sketch',
                shortId: 'Lbbm3M3',
              },
              {
                __typename: 'Artboard',
                files: [
                  {
                    __typename: 'File',
                    height: 2133,
                    scale: 1,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/aad31a24-b2e3-4115-88e8-5d60a3869246/shares/aad31a24-b2e3-4115-88e8-5d60a3869246.l.png?expires=1648684800&s=053159eaf1ba9d9e3e57996e6c70ef475881e005ca1a5591725240d5bf67e2c4',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/aad31a24-b2e3-4115-88e8-5d60a3869246/shares/aad31a24-b2e3-4115-88e8-5d60a3869246.m.png?expires=1648684800&s=e83e6f45aa2bec3cc7e6afad1c44ef9c1e491cf92e5e47ea0cfb12bc97945336',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/aad31a24-b2e3-4115-88e8-5d60a3869246.png?Expires=1648411200&Signature=ANXiU5wpBKRmpQd~Jg8Cg0qXfPWp6FxrffvDl2-lFbU-~DI6JFvSkfSqiPGiOVB0JYt2mbUpiwNDdZBhBpddTnyiIuJDLGfUsw5bw3dJt0sQZKwWf0LAGuWLEiIcigedkO9ZbKxkDMGxLuX-h8UMuMaBiOPLIk4IrmG5EcEf8JM_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 1200,
                  },
                  {
                    __typename: 'File',
                    height: 4266,
                    scale: 2,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd/shares/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd.l.png?expires=1648684800&s=080fec949c1f07117831bddaa19f7070cf01281ee61e492c1e9b898c6a462e10',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd/shares/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd.m.png?expires=1648684800&s=7d27b82fdc1f8dc9320e141480f833b37b14d71bf6b9867f808edb7da2c2d7e3',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd.png?Expires=1648411200&Signature=c~5ZQhdlkLu8pKGoq9QyG8TVcLKy6zeAfvZnizI2WlXFxbn~phgREIq66BnrkBLxMtJxCMmHDV361l9smbEDZhbt-hdJ6PVru1UqJmSFEzi71pdgSu6-ox6ZXn-deVeGO7yzsE~H~bHG2quHGSrVA4zM6NSlLcKhbrArhRPJSCo_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 2400,
                  },
                ],
                isArtboard: true,
                name: 'Android',
                shortId: '7VVo3EP',
              },
              {
                __typename: 'Artboard',
                files: [
                  {
                    __typename: 'File',
                    height: 1920,
                    scale: 1,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/adb77083-d446-431c-962b-4f9875e4290f/shares/adb77083-d446-431c-962b-4f9875e4290f.l.png?expires=1648684800&s=8ea4e1d598e15623de5f1512ddb1e6a5efd9332c432bfbf38d3d3218b36cfe82',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/adb77083-d446-431c-962b-4f9875e4290f/shares/adb77083-d446-431c-962b-4f9875e4290f.m.png?expires=1648684800&s=753b4c155e16164646b8b6475de634bde046583bbd1016b0b094f954ff4f5f0d',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/adb77083-d446-431c-962b-4f9875e4290f.png?Expires=1648411200&Signature=Xf~O5aBMPw0WGAaiATPBDYTdz~e9Kfwd84i0md~umfSunmi6z-Ql6eZDDzzq51tpP7EwWFCt0xPD4ymAOK5Q0VY-Pz3eJ7OeXDbcp9M7gDoS~K6I1JhudCZh4a0tox~tVFhZoeNLz8hjjXANQBVQHFqu~WGGOK3fYxbg95MaW~E_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 1080,
                  },
                  {
                    __typename: 'File',
                    height: 3840,
                    scale: 2,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/4f1b1463-e384-4def-96f1-f50140ff1a2a/shares/4f1b1463-e384-4def-96f1-f50140ff1a2a.l.png?expires=1648684800&s=a0d00017283afc3b7c7ba5551c67c43d4ea4286440f4bcce6eff5708c2d8005e',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/4f1b1463-e384-4def-96f1-f50140ff1a2a/shares/4f1b1463-e384-4def-96f1-f50140ff1a2a.m.png?expires=1648684800&s=5769a5aa6744c36a818afd5fabe6d1261faaa5bf8898410ca00c3284fcdf954b',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/4f1b1463-e384-4def-96f1-f50140ff1a2a.png?Expires=1648411200&Signature=f0VfcXBYpwqL502F~CESegUi2tKldLSeOWZzITfrbx6f-cX7QCYYNdGc36Eb~hjQz9PfssSkOAMPyxuz7a~Vt3mEuctt6qY658JBTzLeJhyxj4Hu~LhxSeINJHc17QY75eW~WVRVplDthygPKWtplZJ7wrZXv6d5r9T-UBV6rXI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 2160,
                  },
                ],
                isArtboard: true,
                name: 'Android 4',
                shortId: 'yLLED0a',
              },
              {
                __typename: 'Artboard',
                files: [
                  {
                    __typename: 'File',
                    height: 384,
                    scale: 1,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://resources-live.sketch.cloud/files/62ac50b1-4eca-4c5e-99ff-ad064ed1641f.png?Expires=1648411200&Signature=AG5X1LB6sL8X-QO6fUnfR40kD0A2VwS8ccwzxfq5DJhXJHOoB18dU1LkjopjJPNUN-zyDhNubagKDvY0WtsLv0KdKhYGdOiFNLHKdwkPHCE3htMPBEm5dWLW4I99ZTMJqA6V0IjFws6BvLHOZ7HaLMm4C-r-O2U06pgRK71cKOY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/62ac50b1-4eca-4c5e-99ff-ad064ed1641f/shares/62ac50b1-4eca-4c5e-99ff-ad064ed1641f.m.png?expires=1648684800&s=5b21cec237f8bdf7899c1e71ad628b287ffc20e7dc44495ab3bc532265fc9afe',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/62ac50b1-4eca-4c5e-99ff-ad064ed1641f.png?Expires=1648411200&Signature=AG5X1LB6sL8X-QO6fUnfR40kD0A2VwS8ccwzxfq5DJhXJHOoB18dU1LkjopjJPNUN-zyDhNubagKDvY0WtsLv0KdKhYGdOiFNLHKdwkPHCE3htMPBEm5dWLW4I99ZTMJqA6V0IjFws6BvLHOZ7HaLMm4C-r-O2U06pgRK71cKOY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 720,
                  },
                  {
                    __typename: 'File',
                    height: 768,
                    scale: 2,
                    thumbnails: [
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea/shares/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea.l.png?expires=1648684800&s=e25187c92c5f44d912b4704520db6b383f287fb672ccfc25e06c75032f97c960',
                        width: null,
                      },
                      {
                        __typename: 'Thumbnail',
                        height: null,
                        url: 'https://graphql.sketch.cloud/assets/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea/shares/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea.m.png?expires=1648684800&s=d01e07ebdc44a213ff25dd6f844796d0c02e46534498575edf4be1991e8fe1c4',
                        width: null,
                      },
                    ],
                    url: 'https://resources-live.sketch.cloud/files/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea.png?Expires=1648411200&Signature=kPSW2NMpp~FlU3iV6y2bkCwgLlqoPIZxX1JkuKxe8ZoZ-vbsvYYpSdsYfF2bB6YHyvMl3NxMAByFOC5DCVXAb5xHb~UHerSucTUqc7ObZK10IXR1~fNq6MdYpmdD57l0JkQX-8rdn4ZHmeuo5TxpSY1BrtTHcd5Or5t8cz0TRcQ_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
                    width: 1440,
                  },
                ],
                isArtboard: true,
                name: 'Win 1984',
                shortId: '95513Kz',
              },
            ],
          },
          name: 'Code test',
        },
      },
    },
  },
};

export const withDocument = [
  {
    request: {
      query: GET_SHARED_DOCUMENT,
      variables: {
        shareId: 'e981971c-ff57-46dc-a932-a60dc1804992',
      },
    },
    result: {
      data: {
        share: queryPayload.data.share,
      },
    },
  },
];

export const missingDocument = [
  {
    request: {
      query: GET_SHARED_DOCUMENT,
      variables: {
        shareId: 'missing-document',
      },
    },
    result: {
      data: {
        share: null,
      },
    },
    error: new Error('Error: Share was not found'),
  },
];
