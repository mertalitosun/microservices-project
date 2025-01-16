# Mikroservis Projesi - Genel Bilgi

Bu proje, toplamda 4 adet mikroservis içermektedir:  
1. **User Management**: Kullanıcı işlemleri.  
2. **Customer Management**: Müşteri işlemleri.  
3. **Sales Management**: Satış işlemleri.  
4. **API Gateway**: Tüm mikroservislerin yönlendirilmesi.  

Her mikroservis, kendi sorumluluk alanıyla ilgili işlevleri yerine getirecek şekilde tasarlanmıştır. Mikroservislerin detayları aşağıda açıklanmıştır.

---

## **User Management Mikroservisi**
Bu mikroservis, kullanıcı işlemleri, rol işlemleri ve kimlik doğrulama işlemlerini yönetir. İşlevler, her biri farklı controller dosyaları içinde yapılandırılmıştır:

- **`auth.js`**:  
  Yalnızca giriş işlemlerinin yapılmasını sağlar. Proje başlangıcında dummy veri olarak bir **admin** kaydı otomatik oluşturulur.  
  > **Not**: Admin bilgileri dummydatadan değiştirilebilir ve bu bilgilerle giriş yapılabilir.  

- **`user.js`**:  
  Kullanıcı CRUD işlemleri yapılır.

- **`role.js`**:  
  Rol CRUD işlemleri yapılır.  

Her bir controller için rotalar **route** dosyalarında tanımlanmıştır. Kimlik doğrulama işlemleri (authentication), ilgili route seviyesinde yapılmaktadır.

---

## **Customer Management Mikroservisi**
Bu mikroservis, müşteri ve not yönetimi ile ilgili işlemleri içerir:  

- **`customer.controller.js`**:  
 Müşteri CRUD işlemleri yapılır.  

- **`note.controller.js`**:  
 Müşterilere özel notların CRUD işlemleri yapılır.  

---

## **Sales Management Mikroservisi**
Bu mikroservis, satış işlemlerini yönetir:  

- **`sales.controller.js`**:  
 Satış CRUD işlemleri gerçekleştirilir.  

---

# Veritabanı İlişkileri
Her mikroservisin veritabanı ilişkileri, o mikroservisin **`db/relationships.js`** klasörü altında tanımlanmıştır.  

---

## **API Gateway**
API Gateway, tüm mikroservislerin tek bir giriş noktasından erişilebilir olmasını sağlar. Gelen istekleri uygun mikroservislere yönlendirmekle görevlidir.

---

## **Postman Kullanımı**
1. **Postman Dosyası**  
   - Proje kurulumundan sonra ana dizinde bulunan Postman koleksiyon dosyasını içeri aktararak tüm endpointleri görebilir ve test edebilirsiniz.  

2. **Token ile Yetkilendirme**  
   - API'ye istek göndermeden önce yetkilendirme gerekmektedir. Aşağıdaki adımları izleyin:  
     - **Login Endpoint**: Giriş yapmak için gerekli bilgileri kullanarak **Login** endpointine istek gönderin.  
     - Gelen cevaptaki **Token**'ı kopyalayın.  
     - Test etmek istediğiniz endpointlere istek yapmadan önce, Postman'da **Headers** kısmına şu bilgiyi ekleyin:  
       - **Key**: `Authorization`  
       - **Value**: (Kopyaladığınız tokeni buraya yapıştırın.)  

3. **Postman İstek Örnekleri**  
   - Tüm endpointler için örnekler mevcuttur.  
   - Hangi endpointin ne iş yaptığını ve hangi parametreleri kabul ettiğini hızlıca öğrenebilirsiniz.

---