export const ListPeople = [
    {
      id: '1',
      partner: {
        id: 'u1',
        name: 'Nguyễn Quang Huy',
        imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
      },
      activate:0
    },
    {
      id: '2',
      partner: {
        id: 'u2',
        name: 'Nguyễn Văn Thanh',
        imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/s320x320/53419601_2187033871611868_5753282342814744576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=V9hgJhBl8d0AX_LU1ff&_nc_ht=scontent.fhph1-2.fna&oh=e2064a6dfd192328096fd915ac79ca1f&oe=619D31A5',
      },
      activate:1
    }, 
    {
      id: '3',
      partner: {
        id: 'u3',
        name: 'Bùi Việt Hoàng',
        imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A',
      },
      activate:0
    }, 
    {
      id: '4',
      partner: {
        id: 'u4',
        name: 'Vũ Xuân Khánh',
        imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/134994572_2626773770956391_4564113000548582004_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVSICmD7zNQAX-jYb8v&_nc_ht=scontent.fhph1-2.fna&oh=25b50b4bba8b2bbe481329f8dacb2a6b&oe=619D398A',
      },
      activate:1
    }, 
    {
      id: '5',
      partner: {
        id: 'u5',
        name: 'Trần Quang Minh',
        imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_cT_Ic&_nc_ht=scontent.fhph1-2.fna&oh=6bf85a3b0bc5f8afff89103d499698df&oe=619DFDD6',
      },
      activate:1
      
    }
  ]

export const chat = {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Minh',
		imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_JzK04&_nc_ht=scontent.fhph1-2.fna&oh=a21c2df2790ebe4530a8602e82622d88&oe=61A1F256',
	}, {
		id: 'u2',
		name: 'Huy',
		imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
	}],
	messages: [{
		id: 'm1',
		content: 'Còn đúng cái nịt thôi :v',
		createdAt: '2021-10-27T12:48:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm2',
		content: 'Còn cái nịt!',
		createdAt: '2021-10-27T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm3',
		content: 'Nhặt được 20 triệu?',
		createdAt: '2021-10-27T14:49:40.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}, {
		id: 'm4',
		content: 'Ngu dốt',
		createdAt: '2021-10-27T14:50:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm5',
		content: 'Nhặt dơ lên của ai đây',
		createdAt: '2021-10-27T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}, {
		id: 'm6',
		content: 'Tham lam',
		createdAt: '2021-10-27T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm7',
		content: 'Nhặt đút vào túi?',
		createdAt: '2021-10-27T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}]
}