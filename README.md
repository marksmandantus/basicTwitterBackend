# Twitter Backend API

🐦

Bu proje, Twitter benzeri bir uygulama için TypeScript ile oluşturulmuş bir backend sunucusunu içerir. AuthRoutes, UserRoutes ve TweetRoutes kullanılarak yapılandırılmıştır.

## Kullanım

API'nin kullanımı aşağıdaki rotalar üzerinden gerçekleşir:

- `/api/auth/login`: Kullanıcı girişi için POST isteği.
- `/api/auth/register`: Yeni kullanıcı kaydı için POST isteği.
- `/api/auth/logout`: Oturumu kapatmak için POST isteği.

- `/api/users/:userId`: Kullanıcı profilini almak için GET isteği.
- `/api/users/:userId/tweets`: Bir kullanıcının tweetlerini almak için GET isteği.
- `/api/users/:userId/follow`: Bir kullanıcıyı takip etmek için POST isteği.
- `/api/users/:userId/unfollow`: Bir kullanıcının takibini bırakmak için POST isteği.

- `/api/tweets`: Tüm tweetleri almak için GET isteği.
- `/api/tweets/:tweetId`: Belirli bir tweeti almak için GET isteği.
- `/api/tweets/create`: Yeni bir tweet oluşturmak için POST isteği.
- `/api/tweets/:tweetId/update`: Bir tweeti güncellemek için PUT isteği.
- `/api/tweets/:tweetId/delete`: Bir tweeti silmek için DELETE isteği.
