# Microservices Project

Bu proje, mikroservis mimarisi kullanarak geliştirilmiş bir uygulamadır. Her mikroservis bağımsız bir şekilde çalışır ve belirli portlarda hizmet verir. Ortak `common` klasörü üzerinden tüm mikroservisler iletişim kurar, veritabanı bağlantıları ve doğrulama işlemleri yapılır.

## Mikroservisler

- **Customer Service** (Port: 3003)  
  Müşteri işlemlerini yönetir.  
  [Swagger Documentation](http://localhost:3003)

- **Sales Service** (Port: 3002)  
  Satış işlemlerini yönetir.  
  [Swagger Documentation](http://localhost:3002)

- **User Service** (Port: 3001)  
  Kullanıcı işlemlerini yönetir.  
  [Swagger Documentation](http://localhost:3001)

## Ortak Servisler

- **Common Service**  
  Veritabanı bağlantıları ve JWT token doğrulama işlemleri için ortak servis.

## API Gateway

API Gateway, tüm mikroservislerin birleştiği yerdir. Mikroservislerin yönlendirilmesinde ve yönetilmesinde anahtar bir rol oynar.
- URL: `http://localhost:3004/{service}/`
  - `{service}` değişkeni ile mikroservis ismini belirtmelisiniz. Örnekler:
    - `customers` - Customers mikroservisi
    - `users` - Users mikroservisi
    - `sales` - Sales mikroservisi

## Çevresel Değişkenler

Proje `.env` dosyasını kullanır. Her mikroservis için veritabanı, ve port değişkenlik gödtermektedir. 

### Örnek `.env` dosyası:

```bash
# .env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB=

JWT_SECRET=microserviceUserJwtSecretKey

PORT=3003
```

## Mikroservislerin Swagger Belgeleri

Her mikroservisin kendine ait bir Swagger dökümantasyonu bulunmaktadır. Aşağıda her mikroservis için Swagger URL'lerini bulabilirsiniz:

### 1. **User Mikroservisi**
User mikroservisi kullanıcı yönetimi için kullanılır. Swagger belgeleri şu adreste erişilebilir:
- URL: `http://localhost:3001/api-docs`

### 2. **Sales Mikroservisi**
Sales mikroservisi satış yönetimi ve ilgili işlemleri yönetir. Swagger belgeleri şu adreste erişilebilir:
- URL: `http://localhost:3002/api-docs`

### 3. **Customer Mikroservisi**
Customer mikroservisi müşteri yönetimi için kullanılır. Swagger belgeleri şu adreste erişilebilir:
- URL: `http://localhost:3003/api-docs`

### Ortak Swagger Yapısı
Swagger, her mikroservisin içinde tanımlı olan API'leri, endpoint'leri, parametreleri ve cevapları listeler. API'lere ait açıklamalar ve örnek yanıtlar da burada yer alır. Böylece her mikroservisin bağımsız olarak test edilmesi sağlanır.

Swagger belgelerine erişmek için mikroservislerin ilgili portlarına giderek `/api-docs` yolunu takip edebilirsiniz. 
Yada 
- URL: `http://localhost:3004/{service}/api-docs`
  - `{service}` değişkeni ile mikroservis ismini belirtmelisiniz. Örnekler:
    - `customers` - Customers mikroservisi
    - `users` - Users mikroservisi
    - `sales` - Sales mikroservisi



