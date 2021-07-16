export const getRows = () => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        isPaid: false,
        source: {
          name: 'Пр Тр',
          description: 'Группа. Источников 1',
          image: 'https://testing1.alytics.ru/icons/usersgroup.png',
        },
        sources: [
          {
            source: {
              name: 'email / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 81,
              seances: 81,
              ctr: '-',
              clickPrice: 39.51,
              cost: 3200,
            },
            sales: {
              count: 15.21,
              cpa: 21000,
              gain: 28614.4,
            },
            goal: {
              count: 2,
              cpa: 1000,
              cr: 2000,
            },
          },
        ],
        traffic: {
          shows: '-',
          clicks: 1716,
          seances: 1716,
          ctr: '-',
          clickPrice: 0,
          cost: 0,
        },
        sales: {
          count: 344.54,
          cpa: 0,
          gain: 6778700,
        },
        goal: {
          count: 29,
          cpa: 0,
          cr: 1000,
        },
      },
      {
        isPaid: true,
        source: {
          name: 'Яндекс Директ',
          description: 'Платная реклама',
          image: 'https://direct.yandex.ru/favicon.ico',
        },
        sources: [],
        traffic: {
          shows: 299571,
          clicks: 843,
          seances: 1388,
          ctr: 0.28,
          clickPrice: 35.9,
          cost: 30266,
        },
        sales: {
          count: 181.64,
          cpa: 16000,
          gain: 42371300,
        },
        goal: {
          count: 28,
          cpa: 1000,
          cr: 3000,
        },
      },
      {
        isPaid: false,
        source: {
          name: 'Органический поиск',
          description: 'Группа. Источников 7',
          image:
            'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png',
        },
        sources: [
          {
            source: {
              name: 'email / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 81,
              seances: 81,
              ctr: '-',
              clickPrice: 39.51,
              cost: 3200,
            },
            sales: {
              count: 15.21,
              cpa: 21000,
              gain: 28614.4,
            },
            goal: {
              count: 2,
              cpa: 1000,
              cr: 2000,
            },
          },
        ],
        traffic: {
          shows: '-',
          clicks: 1370,
          seances: 1370,
          ctr: '-',
          clickPrice: 0,
          cost: 0,
        },
        sales: {
          count: 332.41,
          cpa: 0,
          gain: 648828,
        },
        goal: {
          count: 14,
          cpa: 0,
          cr: 1000,
        },
      },
      {
        isPaid: true,
        source: {
          name: 'Google Ads',
          description: 'Платная реклама',
          image:
            'https://www.google.com/images/branding/product/1x/ads_24dp.png',
        },
        sources: [],
        traffic: {
          shows: 5272,
          clicks: 252,
          seances: 449,
          ctr: 4.78,
          clickPrice: 58.77,
          cost: 14809,
        },
        sales: {
          count: 107.13,
          cpa: 13000,
          gain: 24291300,
        },
        goal: {
          count: 10,
          cpa: 1000,
          cr: 3000,
        },
      },
      {
        isPaid: false,
        source: {
          name: 'Переходы с сайтов',
          description: 'Группа. Источников 77',
          image:
            'https://testing1.alytics.ru/icons/groups/927a0bd0-bc5a-4722-beb7-c1d520c7ec72.png',
        },
        sources: [
          {
            source: {
              name: 'email / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 81,
              seances: 81,
              ctr: '-',
              clickPrice: 39.51,
              cost: 3200,
            },
            sales: {
              count: 15.21,
              cpa: 21000,
              gain: 28614.4,
            },
            goal: {
              count: 2,
              cpa: 1000,
              cr: 2000,
            },
          },
          {
            source: {
              name: 'videocourse / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 2,
              seances: 2,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0.19,
              cpa: 0,
              gain: 407.05,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'getresponse / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/getresponse.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'cm / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/cm.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'cm / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 3100,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
        ],
        traffic: {
          shows: '-',
          clicks: 220,
          seances: 220,
          ctr: '-',
          clickPrice: 0,
          cost: 0,
        },
        sales: {
          count: 55.11,
          cpa: 0,
          gain: 10948700,
        },
        goal: {
          count: 4,
          cpa: 0,
          cr: 1000,
        },
      },
      {
        isPaid: false,
        source: {
          name: 'Email рассылки',
          description: 'Группа. Источников 5',
          image:
            'https://www.google.com/images/branding/product/1x/ads_24dp.png',
        },
        sources: [
          {
            source: {
              name: 'email / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 81,
              seances: 81,
              ctr: '-',
              clickPrice: 39.51,
              cost: 3200,
            },
            sales: {
              count: 15.21,
              cpa: 21000,
              gain: 28614.4,
            },
            goal: {
              count: 2,
              cpa: 1000,
              cr: 2000,
            },
          },
          {
            source: {
              name: 'videocourse / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 2,
              seances: 2,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0.19,
              cpa: 0,
              gain: 407.05,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'getresponse / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/getresponse.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'cm / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/cm.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 0,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
          {
            source: {
              name: 'cm / email',
              description: '',
              image: 'https://testing1.alytics.ru/icons/e-mail.ico',
            },
            traffic: {
              shows: '-',
              clicks: 1,
              seances: 1,
              ctr: '-',
              clickPrice: 0,
              cost: 3100,
            },
            sales: {
              count: 0,
              cpa: 0,
              gain: 0,
            },
            goal: {
              count: 0,
              cpa: 0,
              cr: 0,
            },
          },
        ],
        traffic: {
          shows: '-',
          clicks: 84,
          seances: 84,
          ctr: '-',
          clickPrice: 75,
          cost: 6300,
        },
        sales: {
          count: 15.4,
          cpa: 40000,
          gain: 29021.45,
        },
        goal: {
          count: 2,
          cpa: 3000,
          cr: 2000,
        },
      },
    ]
    resolve(new Response(JSON.stringify(data)))
  })
}
