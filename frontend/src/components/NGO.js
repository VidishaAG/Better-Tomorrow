import React from 'react'

export const NGO = () => {

    const NGOlist = [
        {
            "index": 1,
            "Name": "Aashalata Victoria Wilkinson Memorial Charitable",
            "Image": "http://www.aashalata.org/css/logo/Logo.svg",
            "AreaOfWork": "Children, Education & Literacy",
            "Criteria": "Invited to participate in the 1st NGO Conference Of MWCD, 9 Oct 2017",
            "Contact": "L-96-D , 2nd Floor ,D.D.A Flats , Saket. 10058, NEW DELHI (DELHI)"
        },
        {
            "index": 2,
            "Name": "Aastha Foundation",
            "AreaOfWork": "Health & Family Welfare, Labour & Employment",
            "Criteria": "Received support from D.C Handicrafts, GOI, MWCD For various activities",
            "Contact": "12LF, Tansen Marg, New Delhi - 110001, Telephone 011-23358565"
        },
        {
            "index": 3,
            "Name": "Aident Social Welfare Organisation",
            "AreaOfWork": "Livelihood, Women Empowerment",
            "Criteria": "Implementing partner under total sanitation programme of DRDA, Hissar, Vocational Centres under Sarva Siksha Abhiyan; Winner Of South Asia Regional Development Market Place (2008)",
            "Contact": "59, Bhalswa Village, Near Laxmi Narayan Mandir Jhahangirpuri"
        },
        {
            "index": 4,
            "Name": "Balasaheb Education Society",
            "AreaOfWork": "Vocational Training, Women’s Development & Empowerment",
            "Criteria": "Vocational Training, Women’s Development & Empowerment",
            "Contact": "Ralubhai Bhilabhai Soni D-1 Swastik Nagar, Chalthan Tai Palsana Distt. Surat,Gujarat E-Mail: Balasahebedu@Rediffmail.Comtel: 09404193546"
        },
        {
            "index": 5,
            "Name": "Adarsh Saraswati Shiksha Samiti",
            "AreaOfWork": "Children, Education & Literacy, Health & Family Welfare, HIV/AIDS, Human Rights, Micro Finance (Shgs), Nutrition, Rural Development",
            "Criteria": "In existence since 1988; Receiving funds from Haryana state social welfare board",
            "Contact": "Adarsh Saraswati Shiksha Samiti, Sant Garib Dass,Gali No. 2, Kakroi Road, Sonepat Myindiaa@Gmail. Dot.Com"
        },
        {
            "index": 6,
            "Name": "Chinmaya Organization For Rural Development(CORD), ",
            "AreaOfWork": "Holistic Rural Development, Maternal and Child Care",
            "Criteria": "It is a wing of the Chinmaya Mission; its director has been awarded Padma Shri for Social Service and excellence in services in 2008 and 2012 respectively",
            "Contact": "Chinmaya Organization For Rural Development(CORD), P.O Sidhbari, Dharamsala Distt. Kangra176 057 Tel:91-1892-236987, 91-1892-234322 Mobile:91-9418036987 Email: Cordsidhbari@Gmail.Com"
        },
        {
            "index": 7,
            "Name": "All J&K Ex Servicemen Wel. Society",
            "AreaOfWork": "Social Justice And Equality For Women",
            "Criteria": "Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017",
            "Contact": "Welfare Society H.O -199, Rehari Colony, J & K -180005.(Doda Cost)"
        },
        {
            "index": 8,
            "Name": "Adivasi Mahila Samaj ",
            "AreaOfWork": "Social Justice and Equality For Women",
            "Criteria": "Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017",
            "Contact": "Veer Kunwar Singh Colony Gumla P.O. - Gumla District - Gumla State - Jharkhand Pin Code - 835207"
        },
        {
            "index": 9,
            "Name": "Aarambh India Initiative",
            "AreaOfWork": "Child Welfare",
            "Criteria": "In existence since 1986, Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017; Partners with UNICEF, MWCD",
            "Contact": "Aarambh Education And Community Development Society 52 –C, Mohini Parisar Bhopal – 462022 Mp Phone: 0755 – 2751687, Fax: 0755 – 2751813"
        },
        {
            "index": 10,
            "Name": "Aarambh India Initiative ",
            "AreaOfWork": "Social Justice And Equality For Women",
            "Criteria": "Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017",
            "Contact": "Email: Info@aarambhindia.org Website: www.aarambhindia.Org"
        },
        {
            "index": 11,
            "Name": "All Backward Classes & Economic Development Organisation",
            "AreaOfWork": "Women's Development & Empowerment",
            "Criteria": "Implementing Swadhar Greh under MWCD",
            "Contact": "Samaram Bazar, Po Wanging, Dist. Thoubal Manipur – 95148"
        },
        {
            "index": 12,
            "Name": "Zoram Drivers Ramthim Board",
            "AreaOfWork": " Women's Development & Empowerment",
            "Criteria": "In existence since 1957,Events",
            "Contact": "C/O Friends Automobile Enterprises Chanamari, Near Police, Traffic Point, Aizawl"
        },
        {
            "index": 13,
            "Name": "Abhaya Charitable Trust",
            "AreaOfWork": "Educational Support for Poor Children Nutrition,  Women Development",
            "Criteria": "Implementing Ujjawala Scheme Under MWCD",
            "Contact": "Flat No.509, Surya Residency Opp. BSNL Office, Agraharam ELURU, West Godavari, Andhra Pradesh Tel.No.0996319988 Email ID. Abhayacharitablrust2007@Yahoo.Com"
        },
        {
            "index": 14,
            "Name": "Bui Welfare Society",
            "AreaOfWork": "Women Welfare, Working Women's Hostel",
            "Criteria": "Implementation of WWH Scheme of MWCD",
            "Contact": "Bui Welfare Society Near Field Publicity Office, Daparijo, Upper Subansiri, Arunachal Pradesh"
        },
        {
            "index": 15,
            "Name": "Association for Social Health In India",
            "AreaOfWork": "Rehabilitation of women and children",
            "Criteria": "Old organization with Rajmata of Patiala Smt. Mohinder Kaur as its President. In existence since 1965 Invited to participate in the 1st NGO Conference of MWCD, 9 Oct 2017",
            "Contact": "19, Rouse Avenue, New Delhi Date of Est 01.09.1987 Mrs. Surksha Lakhani, Hony. Secretary, Mob: 9988701472 Savera' Flat No. 907, Sector – 43-A, Chandigarh ashidelhi@hotmail.com"
        },
        {
            "index": 16,
            "Name": "Prodigals Home",
            "AreaOfWork": "Children, Women's Development & Empowerment",
            "Criteria": "One of the pioneering NGOs in Nagaland to have started working on drug abuse prevention and rehblitation; Date Of Estt: 1990",
            "Contact": "NSCB Building Complex, P.B No. 148, River Belt Colony, Dimapur – 797112"
        },
        {
            "index": 17,
            "Name": "ADHAR, (Agriculture Development And Human Ability Of Rural)",
            "AreaOfWork": "Children, Health & Family Welfare, Rural Development & Poverty Alleviation, Vocational Training, Women’s Development & Empowerment",
            "Criteria": "At Khairbhadi, PO Sureswar, Via-Udyanbandh, Distt. Nuapada, Orissa E-Mail: Adharnuapada56@Yahoo.Intel: 099938461106"
        },
        {
            "index": 18,
            "Name": "District Council for Child Welfare",
            "AreaOfWork": "Child Welfare",
            "Criteria": "At Khairbhadi, PO Sureswar, Via-Udyanbandh, Distt. Nuapada, Orissa E-Mail: Adharnuapada56@Yahoo.Intel: 099938461106"
        }
    ]

    return (
        <>
        {NGOlist.map((element, index) => {
            return <div style={{border: "1px dashed black"}}>
                <img src={element.Image}></img>
                <h1>{element.Name}</h1>
                <p>{element.AreaOfWork}</p>
                <p>{element.Criteria}</p>
            </div>
        })}
        </>
    )
}
