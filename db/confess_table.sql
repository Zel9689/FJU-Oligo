-- MariaDB dump 10.18  Distrib 10.5.8-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: OligoFJU
-- ------------------------------------------------------
-- Server version	10.5.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `confess_form`
--

DROP TABLE IF EXISTS `confess_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `confess_form` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confess_form`
--

LOCK TABLES `confess_form` WRITE;
/*!40000 ALTER TABLE `confess_form` DISABLE KEYS */;
INSERT INTO `confess_form` VALUES (1,'工作','aaaaa'),(2,'友情','bbb'),(3,'愛情','asdasdasd'),(4,'學業','sdfsdfsdfsdf'),(5,'愛情','測試'),(6,'工作','sdfsdfsdfsdf'),(7,'工作','sdfsdfsdfsdf'),(8,'生活','哈囉你好嗎'),(9,'學業','sadasdasd'),(10,'生活','為了生活我可以忍，但侮辱中華武術就不行！'),(11,'親情','abc'),(12,'親情','dsfsdfsdfsdf'),(13,'親情','dsfsdfsdfsdf'),(14,'親情','dsfsdfsdfsdf'),(15,'親情','dsfsdfsdfsdf'),(16,'親情','dsfsdfsdfsdf'),(17,'親情','dsfsdfsdfsdf'),(18,'親情','dsfsdfsdfsdf'),(19,'親情','dsfsdfsdfsdf'),(20,'親情','dsfsdfsdfsdf'),(21,'愛情','sdfsdfdsf'),(22,'其他','其他的'),(23,'親情','測試看看這樣'),(24,'學業','dsfsdsf'),(25,'友情','dsfsdfsdf'),(26,'學業','sdfsdfdsf'),(27,'愛情','7:10'),(28,'生活','7:13'),(29,'學業','7:14'),(30,'愛情','sdfsdfsdf'),(31,'愛情','測試'),(32,'工作','sdfsdfdsf'),(33,'愛情','love'),(34,'愛情','love'),(35,'工作','sdfsdf'),(36,'愛情','asdf'),(37,'工作','08:46'),(38,'愛情','00:05'),(39,'工作','sdfsdfsdf'),(40,'學業','1:01'),(41,'愛情','1:33'),(42,'愛情','sdfsdfsdf'),(43,'生活','1:56'),(44,'工作','3:02'),(45,'愛情','3:07'),(46,'工作','3:09工作中'),(47,'親情','abc'),(48,'工作','sdfsdfsdf'),(49,'友情','sdfsdfsdf'),(50,'其他','3:19'),(51,'親情','sdfsdfsdf'),(52,'友情','abc'),(53,'生活','dsfdsfsdf'),(54,'工作','dsfsdfsdf'),(55,'學業','sdfsdfsdf'),(56,'其他','3:37'),(57,'友情','dsfsdsdf'),(58,'友情','3:40'),(59,'親情','3:43'),(60,'工作','4:06'),(61,'工作','21:30'),(62,'愛情','dsfsdfsdf'),(63,'愛情','2/4 11:20'),(64,'工作','工作的發生，到底需要如何實現，不工作的發生，又會如何產生。柏格森講過一句值得人反覆尋思的話，秩序之外有混亂，進步之外退步。這句話看似簡單，但其中的陰鬱不禁讓人深思。在人生的歷程中，工作的出現是必然的。工作似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。不難發現，問題在於該用什麼標準來做決定呢？牛頓曾經提過，如果說我對世界有些微貢獻的話，那不是由於別的，只是由於我的辛勤耐久的思索所致。這段話對世界的改變有著深遠的影響。別林斯基曾說過，讀者群是文學的最高法庭，最高裁判者。請諸位將這段話在心中默念三遍。我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。想必大家都能了解工作的重要性。我們不得不面對一個非常尷尬的事實，那就是，若無法徹底理解工作，恐怕會是人類的一大遺憾。我們要學會站在別人的角度思考。哥爾斯密深信，男人最可鄙的莫過於為錢財而結婚。這把視野帶到了全新的高度。鄧小平相信，四個現代化，關鍵是科學技術的現代化。沒有現代科學技術，就不可能建設現代農業、現代工業、現代國防。這句話令我不禁感慨問題的迫切性。從這個角度來看，就我個人來說，工作對我的意義，'),(65,'愛情','測試\n看看\n這樣算\n多少字'),(66,'愛情','2/4 週四 15:30'),(67,'工作','sdfsdfsdf'),(68,'工作','sdfsdfdsf'),(69,'親情','2/4 17:14'),(70,'工作','2/4 17:16'),(71,'工作','asdfasdfsaf'),(72,'愛情','sdfsdfsdf'),(73,'工作','sdfsdfsdf'),(74,'愛情','sfsdfsdfasdfafafaf'),(75,'愛情','2/5 00:04'),(76,'工作','2/5 00:06'),(77,'工作','fsdfsdfsdf'),(78,'愛情','2/5 00:41'),(79,'學業','2/5 00:49'),(80,'工作','2/5 00:50'),(81,'生活','dsfsdfsdfsfdf'),(82,'其他','sfdsdfasdfafdjsao fjosida jfpsadf'),(83,'友情','我要自首'),(84,'學業','2/5 01:22 friday'),(85,'愛情','2/5 02:02 chrome testing'),(86,'愛情','像這樣的愛情\n讓我苦惱\n總一個人又哭又笑'),(87,'親情','爸爸媽媽給我 的不少不多\n足夠我在這年代奔波\n足夠我生活'),(88,'工作','做 做 做 做 做 做 做\n別出門工作\n做 做 做 做 做 做 做\n用身體工作'),(89,'學業','書桌\n清一清也會變得寬闊\n鉛筆\n握一握也會變得暖活\n我相信\n努力就會有收穫\n請你相信我\n跟我一起說\n我會考一百分'),(90,'生活','test'),(91,'其他','\"test\"'),(92,'其他','2/5 20:38'),(93,'親情','2/6 04:22 星期六'),(96,'其他','防止sql injection測試'),(97,'其他','2/6 週六 上午 4:47 測試'),(98,'其他','測試單引號\'\'\'\'\''),(99,'其他','測試雙引號\"\"\"\"\"'),(100,'其他','測試各種標點符號\n~!@#$%^&*()_+-=--++|\\?/>.<,:;\"\'{[}]`\\\\\\\\：、；＼｜」』「『『＝＋—）（＊＆︿％＄＃＠！‥※…｛”'),(101,'學業','鄒韜奮相信，最主要的是所選的朋友須正派，即品性端正的人。這不禁令我深思。學業的存在，令我無法停止對他的思考。學業可以說是有著成為常識的趨勢。問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。如果此時我們選擇忽略學業，那後果可想而知。學業對我來說，已經成為了我生活的一部分。那麼，陀思妥耶夫斯基深信，對具有高度自覺與深邃透徹的心靈的人來說，痛苦與煩惱是他必備的氣質。這段話令我陷入了沈思。總結來說，漢密爾頓說過一句著名的話，在政治上，如同在宗教上一樣，要想用火與劍迫使人們改變信仰，是同樣荒謬的。這不禁令我深思。對於一般人來說，學業究竟象徵著什麼呢？謹慎地來說，我們必須考慮到所有可能。問題的核心究竟是什麼？\n若到今天結束時我們都還無法釐清學業的意義，那想必我們昨天也無法釐清。我們不得不面對一個非常尷尬的事實，那就是，學業勢必能夠左右未來。話雖如此，如果仔細思考學業，會發現其中蘊含的深遠意義。看看別人，再想想自己，會發現問題的核心其實就在你身旁。泰戈爾在過去曾經講過，附和真理，生命便會得到永生。這不禁令我重新仔細的思考'),(102,'生活','ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒ');
/*!40000 ALTER TABLE `confess_form` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-06  5:19:31
