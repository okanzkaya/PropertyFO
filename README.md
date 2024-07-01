# propertyFO

propertyFO is a comprehensive property management SaaS application designed to streamline the tasks of property managers. Using the MERN stack (MySQL, Express, React, Node.js), propertyFO offers a secure, optimized, and professional solution for managing properties, tenants, leases, and payments.

## Features

### Tenant Management
- **Invitation System:** Property managers can invite tenants by sending a link to their email address. Property managers need to buy a subscription to use this service.
- **Ticket System:** Both tenants and property managers can create tickets for issues, questions, or requests. Notifications are sent via web notifications or emails.
- **Payment Proof:** Tenants can upload proof of payment, and property managers can confirm the payment.
- **Communication:** Efficient communication between property managers and tenants via the ticket system.

### Property Management
- **Property Creation:** Property managers can create property listings, add pictures, and upload documents.
- **Access Control:** Property managers can control tenant access to property documents, ensuring sensitive information is kept secure.

### Lease Management
- **Lease Agreements:** Create and manage lease agreements with detailed information and renewals.
- **Rent Collection:** Manage rent schedules, track payments, and handle outstanding balances.

## Technology Stack

- **MySQL:** For storing data related to properties, tenants, leases, and transactions.
- **Express.js:** For backend API and server management.
- **React.js:** For building a responsive and user-friendly frontend.
- **Node.js:** For server-side logic and operations.

## Development Environment

- **IDE:** Visual Studio Code (VSCode)
- **Version Control:** Git
- **Repository:** GitHub

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/propertyFO.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd propertyFO
    ```
3. **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```
4. **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start the backend server:**
    ```sh
    cd backend
    npm start
    ```
2. **Start the frontend server:**
    ```sh
    cd frontend
    npm start
    ```
3. **Access the application:**
    Open your browser and navigate to `http://localhost:3000`

## Project Structure

### Backend (Express.js)
- **routes/**
  - Contains route definitions for API endpoints.
- **models/**
  - Contains Sequelize model definitions.
- **config/**
  - Contains database configuration.

### Frontend (React.js)
- **components/**
  - Contains reusable React components.
- **services/**
  - Contains functions for making API calls.
- **utils/**
  - Contains utility functions.

## Security

- **Authentication:** JWT-based authentication for secure access.
- **Data Encryption:** Sensitive data is encrypted.
- **Access Control:** Fine-grained access control to manage who can see and do what.

## Contributing

1. **Fork the repository**
2. **Create a new branch**
    ```sh
    git checkout -b feature-name
    ```
3. **Commit your changes**
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**
    ```sh
    git push origin feature-name
    ```
5. **Open a pull request**

## License

This project is licensed under a proprietary license. See the LICENSE.txt file for more information.

## Contact

For questions or support, please contact [your email address].

```
propertyFO
├─ .git
│  ├─ .MERGE_MSG.swp
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ 8261ec179c4ae5baa1053aa833004bfa4fab41
│  │  ├─ 03
│  │  │  └─ 275c128b8d5d7a290d863e6b09a7f34083b850
│  │  ├─ 04
│  │  │  ├─ 412a31b5e18a9d0455eaff63a298002bed0d07
│  │  │  ├─ 730753c57e7917ba7c09392e0452c0b8737c50
│  │  │  └─ 8ec93042d776cb13f2bd0ed73c39b5c6136cb7
│  │  ├─ 06
│  │  │  └─ 4ea249c4c8879c7bae1cf99645f260be2b3c64
│  │  ├─ 08
│  │  │  └─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  ├─ 09
│  │  │  └─ 349d2da5cd6b372b5f262bc7db4c8aeb4a2a0d
│  │  ├─ 0a
│  │  │  ├─ 36f7af9d737ff512650e220abf61105cf8acd2
│  │  │  └─ e3f73d6a971bd1056c6ce8055ff7a86ecfbab9
│  │  ├─ 0b
│  │  │  └─ 6ad204703c8401e6ff1f2b1c02d2a70d4b44a2
│  │  ├─ 0c
│  │  │  └─ 6a2d9f3de0bf3301e61766b8181edd51327060
│  │  ├─ 15
│  │  │  ├─ 0fa10b0c8b6b5659802fe1c14d8faecd3c20d7
│  │  │  └─ ea69a8199e9f9d2f7cfb4a92e69c23466621b7
│  │  ├─ 19
│  │  │  └─ b9359422d8b528653d60cccddf0ba9763069bc
│  │  ├─ 1a
│  │  │  └─ b527d8370c113693ee87b7591067e368516f5e
│  │  ├─ 1c
│  │  │  └─ ea2df2449d61e7c83cbe0cab03535503f7530d
│  │  ├─ 1e
│  │  │  └─ 255d5a06c1c5c75bb227e1b6acb943b2bfd79f
│  │  ├─ 1f
│  │  │  ├─ 03afeece5ac28064fa3c73a29215037465f789
│  │  │  └─ 3a7c3000fd81553617fced2dc001fd8923aa88
│  │  ├─ 23
│  │  │  └─ e089cc094e9dc86318fb22dd093d29c3c7eeb7
│  │  ├─ 25
│  │  │  └─ e90e8148e94d41f92ec46b38f7f7652a17e276
│  │  ├─ 26
│  │  │  └─ 6b9d2137ae4dcc8248e477f1344e380750c9fd
│  │  ├─ 35
│  │  │  └─ 94430ce0129b3fa759d4de38af0a11c31e3dbf
│  │  ├─ 37
│  │  │  └─ ad1e508445d516db4f3f3522a872f97e5ee04c
│  │  ├─ 38
│  │  │  └─ 373b897fc4519cb42c70b248bab972514293a9
│  │  ├─ 39
│  │  │  └─ 7ec4ce35f9966da6fde349e8138a79d49c1647
│  │  ├─ 3e
│  │  │  └─ 38cbc5a5e16e0a2f1a70283f4b8e998c04a147
│  │  ├─ 40
│  │  │  └─ ad512e1a582a7e1e2a193ad5ee08f024c37018
│  │  ├─ 41
│  │  │  ├─ 2e0ea02e94811e04fb1878c1f589cbf0a9ed91
│  │  │  └─ 312de374bd7bab95971058cb83ed9f67e0fe1e
│  │  ├─ 44
│  │  │  └─ aae5d7940c18c26c90343ce3cd4f42fee907bd
│  │  ├─ 46
│  │  │  └─ f7aac570e75d677cf6c2d5d6e767d553a9a57b
│  │  ├─ 4a
│  │  │  ├─ 63039c5ae6563d32c1897df0d6fb2a54760409
│  │  │  ├─ 8072052e92903096a913f1343782fdfd9e9a30
│  │  │  └─ 99a958353a8804af8f5a6aa7466faac0655fe1
│  │  ├─ 4b
│  │  │  ├─ 825dc642cb6eb9a060e54bf8d69288fbee4904
│  │  │  └─ a215cbb41f7cb57e16766684911c6a50889e4f
│  │  ├─ 4c
│  │  │  └─ 972ee4e2f62fc401fc03b4abbcc0a551caee62
│  │  ├─ 4d
│  │  │  ├─ 29575de80483b005c29bfcac5061cd2f45313e
│  │  │  └─ 58a7fd7f61073c21c291cc5d27563f55a6f7bf
│  │  ├─ 4f
│  │  │  └─ 9a4a06ceb554126d084b9f760d04e3bae1b402
│  │  ├─ 52
│  │  │  └─ 53d3ad9e6be6690549cb255f5952337b02401d
│  │  ├─ 53
│  │  │  └─ c69df4c3982e940ebe0b2e327f301f5929ca0d
│  │  ├─ 54
│  │  │  └─ 891dab41e00d69befcbb85888b51aea9968bcf
│  │  ├─ 55
│  │  │  └─ 93717cfd05e24913afde1cca19ab946cffad98
│  │  ├─ 56
│  │  │  └─ e586c42253e54bc47acda8b8df71a0e658ed60
│  │  ├─ 57
│  │  │  └─ 04b13bd837d9b4e2a28e42df3b86fe65b372ef
│  │  ├─ 58
│  │  │  ├─ 13284d87d07d65671f1b8ba6f5ec484a7ebfcf
│  │  │  ├─ 216ae23c97fcede91c96f3d25b993445c1062a
│  │  │  ├─ beeaccd87e230076cab531b8f418f40b6d1aeb
│  │  │  └─ e0f026736ec6abfaec0bdd9db3d7f2bde896cf
│  │  ├─ 5a
│  │  │  └─ 52a0362571f117abcf69a05663ac6e8384e767
│  │  ├─ 5b
│  │  │  └─ f9caad97f548c1cb0415ef28f3f27df99d6aa2
│  │  ├─ 5c
│  │  │  └─ 75039b0bba8b931a188a77321553e4ed6b8e63
│  │  ├─ 62
│  │  │  └─ 4d0bd0d9fbaa543920d44322bdd9dadf4c31fd
│  │  ├─ 63
│  │  │  └─ d981948ff2d4b03a8863a6cbc1796650cbc454
│  │  ├─ 65
│  │  │  ├─ 7b6f540f64d1042f633bce638effbeef61753a
│  │  │  └─ facf8ef44231a8512d17b16add5b810ae6ba20
│  │  ├─ 66
│  │  │  └─ 534fa80e17a69173e5e6498cbfa326e07efd72
│  │  ├─ 67
│  │  │  ├─ 3adebef526af0df7ffe484059f976a98aa761a
│  │  │  ├─ 7f450083037cdde73a7d0439b6e2a0c573aecc
│  │  │  └─ 9e701ae71b570fe8bfae920be50dfcb53e214b
│  │  ├─ 6d
│  │  │  └─ 6a211eaffb8408b432848d26235bfd758e8047
│  │  ├─ 6e
│  │  │  └─ 08c0b54eecf9b3d23dfedbc2a1870d1ab61751
│  │  ├─ 74
│  │  │  └─ b5e053450a48a6bdb4d71aad648e7af821975c
│  │  ├─ 75
│  │  │  └─ cfff1f4a532b314b8e0d61b2c6ce85bc7ec503
│  │  ├─ 76
│  │  │  └─ a829bb2a48ebde19d4e1791a9624f9acfe5887
│  │  ├─ 77
│  │  │  └─ 4c2a4ad524c30ba38d111a2da447fb492ef507
│  │  ├─ 78
│  │  │  └─ 2c667c91126ba9723df15e0d6e21bc82a6fc12
│  │  ├─ 79
│  │  │  ├─ 18cda16404fc86736742975d5f90ec092f4b4e
│  │  │  └─ 5e045699ff91f8bd665d869273fa70ab50521d
│  │  ├─ 7a
│  │  │  └─ 5ba893e58581d0d01b544ce5fde5bef44c97f8
│  │  ├─ 81
│  │  │  └─ 357d1ea14a5c59163f2915027526c6993c7253
│  │  ├─ 86
│  │  │  ├─ 03d4b78a228ef45d1bc20cbf5c16638f166c72
│  │  │  ├─ 324d24b036dd24b3d243f16145c86d751d2b05
│  │  │  └─ 6ca575778297ae03f320cc290089d6d8f273a9
│  │  ├─ 87
│  │  │  └─ d5db82c283d26ec2b2ade9f6acdb89ad337a0b
│  │  ├─ 88
│  │  │  ├─ 1083968905f6900b5cbd2c5151d7be0df2a4dd
│  │  │  ├─ 8fa338c1a7b2a2f5aec37073aad34d6b85f055
│  │  │  └─ af69ac61f875f072b1468359af485de7c93116
│  │  ├─ 89
│  │  │  ├─ 225e546087be28c0ee555b48828dc13e150d42
│  │  │  ├─ 6d138e4ecbe8d48ca2b7b8a0d91159c524feed
│  │  │  └─ 933ddcb1dc03c712978574d72beadd39d6f938
│  │  ├─ 8b
│  │  │  └─ 3f656d1a62edff5961f467ffb65fa15093c017
│  │  ├─ 8e
│  │  │  └─ 29b36dea7f04ae8729d8b33ecc05c3c9b0fe46
│  │  ├─ 8f
│  │  │  ├─ 2609b7b3e0e3897ab3bcaad13caf6876e48699
│  │  │  └─ 27399704999f16504fc88843f7fc5a3c0f9c16
│  │  ├─ 92
│  │  │  └─ 21aea2592fa8b26178017ec06f5915e41e3975
│  │  ├─ 93
│  │  │  └─ 599a1df35fa562c1818a39cf858bfc6c1240fd
│  │  ├─ 94
│  │  │  └─ 1368d40ae7ffcb54bd8e84ef79d4349f6aeb29
│  │  ├─ 99
│  │  │  ├─ 1fda259fe381e323f1695400ad117523ed132c
│  │  │  ├─ 2ee96b9f37ea15bfa2b50b9d1eff5a48d2845b
│  │  │  └─ 8a85a8744ccd5d3e68c5e269486b0aa7804314
│  │  ├─ 9a
│  │  │  ├─ 24e9b9bead51223b6c569825a0ee2871ba07d0
│  │  │  └─ f8c2a8b2c2743d9f13c0376e9dbd43ba97c69a
│  │  ├─ 9b
│  │  │  └─ 5d5469182ad5e4766ba468995308c95c8b2b7e
│  │  ├─ 9d
│  │  │  └─ fc1c058cebbef8b891c5062be6f31033d7d186
│  │  ├─ a1
│  │  │  ├─ 1777cc471a4344702741ab1c8a588998b1311a
│  │  │  └─ b30ff1f2aa8e1b762a3c1a0875af6004219406
│  │  ├─ a2
│  │  │  ├─ 1d82a48b024aa44536474f39e24f44865a2b38
│  │  │  └─ afb183bd2dc71d910df648bdb4d114d9881d9f
│  │  ├─ a4
│  │  │  └─ e47a6545bc15971f8f63fba70e4013df88a664
│  │  ├─ a5
│  │  │  └─ e100967d48a0d315b5b6385370973054317eb9
│  │  ├─ aa
│  │  │  └─ 069f27cbd9d53394428171c3989fd03db73c76
│  │  ├─ ac
│  │  │  └─ ee56b1ecc6b453427b9c8edfb1212dbbece126
│  │  ├─ b2
│  │  │  └─ 81c495d0fddf687a7d7daf88e83d5db86e8c14
│  │  ├─ b3
│  │  │  └─ 1476cd112ba3536777adcb131a270db53969f6
│  │  ├─ b5
│  │  │  └─ d138e0ebd1270dbd1acd81154aa12a2b844c71
│  │  ├─ b6
│  │  │  └─ 916eb3621fd47c9ddf172f7c655e5b2ea3a0a1
│  │  ├─ b7
│  │  │  └─ e0d933a0c7c766685da8686ff6c0c8548def8e
│  │  ├─ b8
│  │  │  └─ 5427cfbb7bc473ba0ad9c23cff492576d30c35
│  │  ├─ bc
│  │  │  └─ dcfacff0c171664455500e4d8a5c84c414cd9c
│  │  ├─ bd
│  │  │  └─ c088303bc0f6e3a7b8562e3066adb2f1b34b6e
│  │  ├─ bf
│  │  │  └─ 74f79169397234810f32e1f85a0683a8daf9c4
│  │  ├─ c0
│  │  │  └─ 7161ea8c64ce31ac12587d7c94c9220dd49ffb
│  │  ├─ c7
│  │  │  ├─ 3b0d76b08374afff5792b9301aebc8c863ae9a
│  │  │  ├─ 8a96821a64c5bb487d4094575780c9fcad835f
│  │  │  └─ c6932511dba2aa5a8f1299d8355553c1034b05
│  │  ├─ ca
│  │  │  └─ 7d11a25d81ab13bcddabb971409b1736b02335
│  │  ├─ cd
│  │  │  ├─ 05f1d50888e9a840d0a484834e1c999d21e00e
│  │  │  └─ d387f80ed034cd78ca9199af5ac7a304c6e810
│  │  ├─ d0
│  │  │  └─ 9aa1bd1252988193352481d645efec76a6049e
│  │  ├─ d1
│  │  │  └─ 17a56db1f6103bdf6dc6a179da3cc9cb3a539f
│  │  ├─ d2
│  │  │  ├─ 5ea5ef8ee215d1db51c297797beb81921bc24c
│  │  │  └─ ed8d065592ea4caa9dc43e3f142f853060ddab
│  │  ├─ d3
│  │  │  └─ 463b6504b6a80c7647f516beb5362ed5db3c8d
│  │  ├─ d4
│  │  │  └─ 9efe4a7a30e14ac240448bd959efb41a79da2d
│  │  ├─ d5
│  │  │  └─ 63c0fb10ba0e42724b21286eb546ee4e5734fc
│  │  ├─ d6
│  │  │  ├─ 19596eb9b67f344368a8866f45fd9bee65eea8
│  │  │  └─ 63c6276b39aee5ed5dc1f58ad2115387387a35
│  │  ├─ d8
│  │  │  └─ 1cf8d1d37979ce1b2dc20791e46ffaea8d0ad7
│  │  ├─ d9
│  │  │  └─ 98cb968c9aad92d311d5fa4e664057bcaf36cf
│  │  ├─ da
│  │  │  └─ 437a8d0677cf98c1f928ba268463e54f018b6a
│  │  ├─ db
│  │  │  └─ 501da45dbdce97ff256249f3075a25ab181acb
│  │  ├─ e0
│  │  │  ├─ 024f3a459f2481e94434c7f8f28cde22f34a72
│  │  │  └─ 35ffd24fc5c44a736845ac0986efba5657599a
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ 3485ac29a3c1861f53ccf0e1a30e65fc13dbbe
│  │  ├─ e9
│  │  │  └─ e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
│  │  ├─ ea
│  │  │  └─ be2caeb3f8a4d4f178103c690fea087936b063
│  │  ├─ eb
│  │  │  └─ 2dd57b37ed98d06147283b40f93089fda73550
│  │  ├─ ec
│  │  │  ├─ 2585e8c0bb8188184ed1e0703c4c8f2a8419b0
│  │  │  ├─ 354b8484acdaf9f7904085df419806193ba328
│  │  │  ├─ 3f6adf3e75fbba5059cc51a58c286a78b7f584
│  │  │  └─ 63309a54739b657944b0e1972b0d802bfc49a8
│  │  ├─ ef
│  │  │  └─ 39fb06909fecf366651afe10302425cfba5ed7
│  │  ├─ f0
│  │  │  └─ c277c3044c32969984942c6be641751a67bba2
│  │  ├─ f1
│  │  │  ├─ 1b463ee4e3f25022a0c0c0303251b534450a16
│  │  │  └─ fdf49051e77ddb5dea2be2d8ecaa6d0e3045e6
│  │  ├─ f5
│  │  │  └─ f456b3c0c640701ca237d3afafc27878126a30
│  │  ├─ f6
│  │  │  └─ 4a12215e73c20767bd83baa163f32724ff9e5d
│  │  ├─ f7
│  │  │  ├─ 45179435979e955877669d3bee31594191d4b2
│  │  │  └─ 8216fe354f2f7bc674e6e4e428a1b0e962c809
│  │  ├─ f8
│  │  │  └─ 8317b05632adbfab6a189cf1a439f7bd44bcf9
│  │  ├─ fa
│  │  │  └─ 8deeadd385fd0f15967cef98585d454c53551c
│  │  ├─ fb
│  │  │  ├─ 12c026fc123cfb0b6184fc909911df61abf32f
│  │  │  └─ cebe07e5534a28c80cc97f750d22d0c306af63
│  │  ├─ fc
│  │  │  └─ 44b0a3796c0e0a64c3d858ca038bd4570465d9
│  │  ├─ fd
│  │  │  └─ 0ff0c9182fd8b6dba3bdcb8f865a69ff0ae9b4
│  │  ├─ fe
│  │  │  └─ bc74a500db2a384afe8a5119f486f86227abc6
│  │  ├─ ff
│  │  │  ├─ 393005e4cbf9d021e65257df5c5f67435ed1ab
│  │  │  └─ 660aa6c9463a443e4f4dfb7d6d9819677a0b7a
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ backend
│  ├─ .env
│  ├─ config
│  │  └─ database.js
│  ├─ index.js
│  ├─ middleware
│  │  └─ auth.js
│  ├─ models
│  │  ├─ Property.js
│  │  ├─ Tenant.js
│  │  ├─ Ticket.js
│  │  └─ User.js
│  ├─ package.json
│  └─ routes
│     ├─ documents.js
│     ├─ index.js
│     ├─ payments.js
│     ├─ properties.js
│     ├─ subscriptions.js
│     ├─ tenants.js
│     ├─ tickets.js
│     └─ users.js
├─ frontend
│  ├─ .gitignore
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ pages
│     │  └─ LoginPage.js
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ LICENSE.txt
└─ README.md

```