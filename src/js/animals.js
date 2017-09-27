const animals = [
  [
    {
      c: '#4099A1',
      p: [ { x: 2114, y: 895 }, { x: 1973, y: 867 }, { x: 1978, y: 842 } ]
    },
    {
      c: '#1598A2',
      p: [ { x: 1978, y: 842 }, { x: 1973, y: 867 }, { x: 1841, y: 816 } ]
    },
    {
      c: '#268B9F',
      p: [ { x: 1841, y: 816 }, { x: 1973, y: 867 }, { x: 1841, y: 876} ]
    },
    {
      c: '#0D86A1',
      p: [ { x: 1841, y: 876}, { x: 1841, y: 816}, { x: 1707, y: 815 } ]
    },
    {
      c: '#107996',
      p: [ { x: 1707, y: 815 }, { x: 1841, y: 876}, { x: 1615, y: 824 } ]
    },
    {
      c: '#0A7690',
      p: [ { x: 1615, y: 824 }, { x: 1841, y: 876}, { x: 1614, y: 960 } ]
    },
    {
      c: '#0A728D',
      p: [ { x: 1614, y: 960 }, { x: 1615, y: 824 }, { x: 1451, y: 897 } ]
    },
    {
      c: '#0C587C',
      p: [ { x: 1451, y: 897 }, { x: 1614, y: 960 }, { x: 1152, y: 1083 } ]
    },
    {
      c: '#066B87',
      p: [ { x: 1615, y: 824 }, { x: 1451, y: 897 }, { x: 1466, y: 835 } ]
    },
    {
      c: '#0D708D',
      p: [ { x: 1466, y: 835 }, { x: 1615, y: 824 }, { x: 1457, y: 784 } ]
    },
    {
      c: '#11758D',
      p: [ { x: 1457, y: 784 }, { x: 1615, y: 824 }, { x: 1406, y: 687 } ]
    },
    {
      c: '#0C4266',
      p: [ { x: 1614, y: 960 }, { x: 1313, y: 1084 }, { x: 1320, y: 1176 } ]
    },
    {
      c: '#0F4D72',
      p: [ { x: 1320, y: 1176 }, { x: 1614, y: 960 }, { x: 1482, y: 1124 } ]
    },
    {
      c: '#0E436B',
      p: [ { x: 1482, y: 1124 }, { x: 1320, y: 1176 }, { x: 1346, y: 1251 } ]
    },
    {
      c: '#104066',
      p: [ { x: 1346, y: 1251 }, { x: 1482, y: 1124 }, { x: 1407, y: 1319 } ]
    },
    {
      c: '#187D89',
      p: [ { x: 1407, y: 1319 }, { x: 1521, y: 1385 }, { x: 1418, y: 1469 } ]
    },
    {
      c: '#1F7488',
      p: [ { x: 1418, y: 1469 }, { x: 1521, y: 1385 }, { x: 1473, y: 1481 } ]
    },
    {
      c: '#28848F',
      p: [ { x: 1473, y: 1481 }, { x: 1418, y: 1469 }, { x: 1470, y: 1559 } ]
    },
    {
      c: '#A5C3C3',
      p: [ { x: 2114, y: 895 }, { x: 2023, y: 973 }, { x: 1973, y: 867 } ]
    },
    {
      c: '#A5BDC1',
      p: [ { x: 1973, y: 867 }, { x: 2023, y: 973 }, { x: 1887, y: 953 } ]
    },
    {
      c: '#A2C5C7',
      p: [ { x: 1887, y: 953 }, { x: 1973, y: 867 }, { x: 1841, y: 876 } ]
    },
    {
      c: '#9BB4BB',
      p: [ { x: 1841, y: 876 }, { x: 1887, y: 953 }, { x: 1614, y: 960 } ]
    },
    {
      c: '#9AAFB2',
      p: [ { x: 1614, y: 960 }, { x: 1887, y: 953 }, { x: 1886, y: 1056 } ]
    },
    {
      c: '#A6B9BF',
      p: [ { x: 1886, y: 1056 }, { x: 1887, y: 953 }, { x: 1978, y: 1012 } ]
    },
    {
      c: '#8CA9AD',
      p: [ { x: 1886, y: 1056 }, { x: 1614, y: 960 }, { x: 1717, y: 1084 } ]
    },
    {
      c: '#87A0A7',
      p: [ { x: 1717, y: 1084 }, { x: 1614, y: 960 }, { x: 1626, y: 1090 } ]
    },
    {
      c: '#809FA4',
      p: [ { x: 1626, y: 1090 }, { x: 1614, y: 960 }, { x: 1482, y: 1124 } ]
    },
    {
      c: '#829EA9',
      p: [ { x: 1482, y: 1124 }, { x: 1626, y: 1090 }, { x: 1535, y: 1156 } ]
    },
    {
      c: '#809DA3',
      p: [ { x: 1482, y: 1124 }, { x: 1535, y: 1156 }, { x: 1407, y: 1319 } ]
    },
    {
      c: '#A3C2C5',
      p: [ { x: 1407, y: 1319 }, { x: 1535, y: 1156 }, { x: 1495, y: 1280 } ]
    },
    {
      c: '#ACC8CC',
      p: [ { x: 1495, y: 1280 }, { x: 1407, y: 1319 }, { x: 1521, y: 1385 } ]
    },
    {
      c: '#B6D2D6',
      p: [ { x: 1521, y: 1385 }, { x: 1495, y: 1280 }, { x: 1651, y: 1312 } ]
    },
    {
      c: '#C0D9DD',
      p: [ { x: 1651, y: 1312 }, { x: 1521, y: 1385 }, { x: 1647, y: 1384 } ]
    },
    {
      c: '#C8E0E4',
      p: [ { x: 1647, y: 1384 }, { x: 1651, y: 1312 }, { x: 1782, y: 1416 } ]
    },
    {
      c: '#759296',
      p: [ { x: 1717, y: 1084 }, { x: 1886, y: 1056 }, { x: 1826, y: 1139 } ]
    },
    {
      c: '#89A5A9',
      p: [ { x: 1826, y: 1139 }, { x: 1886, y: 1056 }, { x: 1871, y: 1210 } ]
    }
  ],
  [
    {
      c: '#C55527',
      p: [ { x: 2019, y: 993 }, { x: 1953, y: 955 }, { x: 1992, y: 914 } ]
    },
    {
      c: '#B64D20',
      p: [ { x: 1992, y: 914 }, { x: 1953, y: 955 }, { x: 1879, y: 954 } ]
    },
    {
      c: '#D8471A',
      p: [ { x: 1879, y: 954 }, { x: 1992, y: 914 }, { x: 1824, y: 904 } ]
    },
    {
      c: '#DB4E18',
      p: [ { x: 1824, y: 904 }, { x: 1992, y: 914 }, { x: 1907, y: 870 } ]
    },
    {
      c: '#FFFDE5',
      p: [ { x: 2045, y: 1060 }, { x: 1981, y: 1051 }, { x: 2009, y: 1017 } ]
    },
    {
      c: '#E1F4F2',
      p: [ { x: 2009, y: 1017 }, { x: 1981, y: 1051 }, { x: 1951, y: 989 } ]
    },
    {
      c: '#F0F2F1',
      p: [ { x: 1951, y: 989 }, { x: 1981, y: 1051 }, { x: 1925, y: 1057 } ]
    },
    {
      c: '#E8F1EC',
      p: [ { x: 1925, y: 1057 }, { x: 1951, y: 989 }, { x: 1879, y: 989 } ]
    },
    {
      c: '#EDF5FF',
      p: [ { x: 1879, y: 989 }, { x: 1925, y: 1057 }, { x: 1857, y: 1090 } ]
    },
    {
      c: '#E2E8E8',
      p: [ { x: 1857, y: 1090 }, { x: 1879, y: 989 }, { x: 1811, y: 1034 } ]
    },
    {
      c: '#EAFAF9',
      p: [ { x: 1811, y: 1034 }, { x: 1857, y: 1090 }, { x: 1777, y: 1071 } ]
    },
    {
      c: '#DAE1E7',
      p: [ { x: 1777, y: 1071 }, { x: 1857, y: 1090 }, { x: 1705, y: 1270 } ]
    },
    {
      c: '#DA9841',
      p: [ { x: 2045, y: 1060 }, { x: 1977, y: 1083 }, { x: 1981, y: 1051 } ]
    },
    {
      c: '#ECA345',
      p: [ { x: 1981, y: 1051 }, { x: 1977, y: 1083 }, { x: 1925, y: 1057 } ]
    },
    {
      c: '#F5A23A',
      p: [ { x: 1925, y: 1057 }, { x: 1977, y: 1083 }, { x: 1857, y: 1090 } ]
    },
    {
      c: '#FA9430',
      p: [ { x: 1857, y: 1090 }, { x: 1977, y: 1083 }, { x: 1896, y: 1311 } ]
    },
    {
      c: '#FD8C26',
      p: [ { x: 1896, y: 1311 }, { x: 1857, y: 1090 }, { x: 1705, y: 1270 } ]
    },
    {
      c: '#FA7D29',
      p: [ { x: 1705, y: 1270 }, { x: 1896, y: 1311 }, { x: 1686, y: 1491 } ]
    },
    {
      c: '#FE6627',
      p: [ { x: 1686, y: 1491 }, { x: 1705, y: 1270 }, { x: 1625, y: 1385 } ]
    },
    {
      c: '#F8601F',
      p: [ { x: 1625, y: 1385 }, { x: 1686, y: 1491 }, { x: 1529, y: 1458 } ]
    },
    {
      c: '#F76029',
      p: [ { x: 1529, y: 1458 }, { x: 1686, y: 1491 }, { x: 1365, y: 1498 } ]
    },
    {
      c: '#F76029',
      p: [ { x: 1365, y: 1498 }, { x: 1686, y: 1491 }, { x: 1455, y: 1565 } ]
    },
    {
      c: '#EF5A18',
      p: [ { x: 1455, y: 1565 }, { x: 1686, y: 1491 }, { x: 1574, y: 1599 } ]
    },
    {
      c: '#E54916',
      p: [ { x: 1574, y: 1599 }, { x: 1686, y: 1491 }, { x: 1738, y: 1566 } ]
    },
    {
      c: '#D73F10',
      p: [ { x: 1738, y: 1566 }, { x: 1686, y: 1491 }, { x: 1889, y: 1454 } ]
    },
    {
      c: '#C92C0D',
      p: [ { x: 1889, y: 1454 }, { x: 1686, y: 1491 }, { x: 1896, y: 1311 } ]
    },
    {
      c: '#C1250C',
      p: [ { x: 1896, y: 1311 }, { x: 1889, y: 1454 }, { x: 1953, y: 1334 } ]
    },
    {
      c: '#BF1A07',
      p: [ { x: 1953, y: 1334 }, { x: 1896, y: 1311 }, { x: 1977, y: 1083 } ]
    },
    {
      c: '#6AB2AE',
      p: [ { x: 1569, y: 1247 }, { x: 1597, y: 1362 }, { x: 1512, y: 1429 } ]
    },
    {
      c: '#4B9598',
      p: [ { x: 1512, y: 1429 }, { x: 1569, y: 1247 }, { x: 1340, y: 1463 } ]
    },
    {
      c: '#246674',
      p: [ { x: 1340, y: 1463 }, { x: 1569, y: 1247 }, { x: 1256, y: 1393 } ]
    },
    {
      c: '#1B5D6D',
      p: [ { x: 1256, y: 1393 }, { x: 1569, y: 1247 }, { x: 1377, y: 1250 } ]
    },
    {
      c: '#8EB0BC',
      p: [ { x: 1377, y: 1250 }, { x: 1256, y: 1393 }, { x: 1226, y: 1271 } ]
    },
    {
      c: '#90A7AD',
      p: [ { x: 1226, y: 1271 }, { x: 1377, y: 1250 }, { x: 1291, y: 1163 } ]
    },
    {
      c: '#B1C7D2',
      p: [ { x: 1291, y: 1163 }, { x: 1377, y: 1250 }, { x: 1440, y: 1147 } ]
    },
    {
      c: '#D4DFE5',
      p: [ { x: 1440, y: 1147 }, { x: 1377, y: 1250 }, { x: 1569, y: 1247 } ]
    }
  ]
  // [
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   },
  //   {
  //     c: '#ddd',
  //     p: [ { x: 20, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 20 } ]
  //   }
  // ]
]

export default animals