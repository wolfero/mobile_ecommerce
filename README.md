# Content index

-   [Postman Documentation](#postman-documentation)
    -   [Installation](#installation-)
    -   [Running the project](#running-the-project-)
-   [Abstract](#abstract)
-   [Used packages](#used-packages)
-   [End-to-End flow](#end-to-end-flow)
-   [Data structures](#data-structures)
    -   [Product list](#product-list)
    -   [Product details](#product-details)
    -   [Product count](#product-count)

# POSTMAN DOCUMENTATION

https://documenter.getpostman.com/view/27344284/2s946bBESb

# Getting Started

-   ## Installation 🛠

    `npm install`

-   ## Running the project ✈

    `npm run start`

# Abstract

This test consists of creating a mini-application for purchasing mobile devices

# Used packages

-   [Vite](https://vitejs.dev/)
-   [Prettier](https://prettier.io/)
-   [React Router](https://reactrouter.com/en/main)
-   [Tailwindcss](https://tailwindcss.com/)
-   [React Testing Library](https://www.npmjs.com/package/@testing-library/react)
-   [Vitest](https://vitest.dev/)
-   [Jsdom](https://www.npmjs.com/package/jsdom)

# End-to-End flow
![end_to_end_flow](https://github.com/wolfero/napptilus_front/assets/64894110/1439cfc7-bb03-41e8-8f8f-ff59a4021ca4)


# Data structures

### Product list

Url: https://itx-frontend-test.onrender.com/api/product

Response

```
[
  {
    "id": "ZmGrkLRPXOTpxsU4jjAcv",
    "brand": "Acer",
    "model": "Iconia Talk S",
    "price": "170",
    "imgUrl": "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
  },
  {
    "id": "cGjFJlmqNPIwU59AOcY8H",
    "brand": "Acer",
    "model": "Liquid Z6 Plus",
    "price": "250",
    "imgUrl": "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
  },
  {
    "id": "8hKbH2UHPM_944nRHYN1n",
    "brand": "Acer",
    "model": "Liquid Z6",
    "price": "120",
    "imgUrl": "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
  }
]
```

### Product details

Url: https://itx-frontend-test.onrender.com/api/product/product_id (ZmGrkLRPXOTpxsU4jjAcv)

Response

```
{
  "id": "ZmGrkLRPXOTpxsU4jjAcv",
  "brand": "Acer",
  "model": "Iconia Talk S",
  "price": "170",
  "imgUrl": "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  "networkTechnology": "GSM / HSPA / LTE",
  "networkSpeed": "HSPA 42.2/11.5 Mbps  LTE Cat4 150/50 Mbps",
  "gprs": "Yes",
  "edge": "Yes",
  "announced": "2016  August",
  "status": "Available. Released 2016  October",
  "dimentions": "191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)",
  "weight": "260",
  "sim": "Dual SIM (Micro-SIM/Nano-SIM)",
  "displayType": "IPS LCD capacitive touchscreen  16M colors",
  "displayResolution": "7.0 inches (~69.8% screen-to-body ratio)",
  "displaySize": "720 x 1280 pixels (~210 ppi pixel density)",
  "os": "Android 6.0 (Marshmallow)",
  "cpu": "Quad-core 1.3 GHz Cortex-A53",
  "chipset": "Mediatek MT8735",
  "gpu": "Mali-T720MP2",
  "externalMemory": "microSD  up to 128 GB (dedicated slot)",
  "internalMemory": [
    "16 GB",
    "32 GB"
  ],
  "ram": "2 GB RAM",
  "primaryCamera": [
    "13 MP",
    "autofocus"
  ],
  "secondaryCmera": [
    "2 MP",
    "720p"
  ],
  "speaker": "Yes",
  "audioJack": "Yes",
  "wlan": [
    "Wi-Fi 802.11 a/b/g/n",
    "Wi-Fi Direct",
    "hotspot"
  ],
  "bluetooth": [
    "4.0",
    "A2DP"
  ],
  "gps": "Yes with A-GPS GLONASS",
  "nfc": "",
  "radio": "FM radio",
  "usb": "microUSB 2.0",
  "sensors": [
    "Accelerometer",
    "proximity"
  ],
  "battery": "Non-removable Li-Ion 3400 mAh battery (12.92 Wh)",
  "colors": [
    "Black"
  ],
  "options": {
    "colors": [
      {
        "code": 1000,
        "name": "Black"
      }
    ],
    "storages": [
      {
        "code": 2000,
        "name": "16 GB"
      },
      {
        "code": 2001,
        "name": "32 GB"
      }
    ]
  }
}
```

### Product count

Url: https://itx-frontend-test.onrender.com/api/cart

Post body

```
{
"id": "ZmGrkLRPXOTpxsU4jjAcv",
"colorCode": 1000,
"storageCode": 2000
}
```

Response

```
{
  "count": 1
}
```
