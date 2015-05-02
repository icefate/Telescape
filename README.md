# Telescape


Telescape ��һ��Chrome�������չ��ͨ��Chrome��������� editplus �� sublime �ȱ༭�����򿪵�ǰ�����ҳ��Ĵ����ļ����򵥵�˵����Chrome����������ⲿ����

Git����: [https://github.com/icefate/Telescape](https://github.com/icefate/Telescape)

���ߣ�T.N.T (icefate)

����: [http://ce.buckethead.cn](http://ce.buckethead.cn) 

Email��i#buckethead.cn (�뽫#��Ϊ@)



## һЩ��

��ĿǰΪֹһֱ����editplus �� sublime дphp��css��js�ȵȣ��������༭�����ٶȹ��죬�Ҳ�ϲ�����͵�IDE��

���ڵ��ԣ�����ֱ���������Ч�������ĸ�ҳ�治˳����ȥ��������Ĵ����ļ����ġ�Ȼ���أ�����Ҫ��ͣ�ش����ڴ�Ÿ������ʹ�����ļ���. 

żȻ��֪Chrome��չ�����ṩ�����ⲿ����ͨ�ŵĹ��ܣ�Ȼ�����Щ�ĵ���д�����������



## Ч����ʾ - Gif 


�ĵ��Ƚφ��£���������gif��Ҳ�����ϲ����


Chrome���ñ༭�����ļ� �� ���ļ���- Ч����ʾ��<a href="gif/1.gif">gif/1.gif </a>

���Լ��õģ�<a href="gif/2.gif">gif/2.gif</a> -- ע�⣬����Ŀ�в��������е�js����



## ׼��- Prepare

ϵͳ�� Win 7 64λ �� Win XP ��ǰҲ���ԣ���ò����ˣ���������ԡ�

Chrome�汾�� 39.0.2171.99 m  -- ���°汾��û�⡣

ע�⣺��ĵ�����Ҫ��װ `.net framework 4.0` ���� �� ���»�˵��


## ��װ - Install

### ���ע���� (��gif)

�������Ķ����ٿ���ߵ�gif

<strong>1����ע���������ҵ� NativeMessagingHosts</strong>

����λ����������λ�ã�
```
  HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\ 
��
  HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\ 
```
��û�У����ҵ� Google\Chrome\ �Ľڵ㣬�Լ���һ������

<br>
<strong>2���� NativeMessagingHosts ���½� telescape ��</strong>

NativeMessagingHosts ���½���Ϊ `telescape` ���ֵ��д `Telescape.json��·��` �����磺
```
E:\APMServ5.2.6\www\htdocs\jsplugin\ChromeExt\Telescape\host\Telescape.json
```


��gif �� <a href="gif/regedit.gif" target="_blank" style="font-size: 18px;">ע������� - regedit.gif</a>



### ����config.ini

�޸�`host/config.ini`�ļ�,  ���ñ༭��·��: 
```
[Editor]
editplus="D:\Program Files\EditPlus 3.51\EditPlus.exe"
sublime="D:\Program Files\Sublime Text 2\SublimeText.exe"
notepad="notepad"
```
* editplus / sublime �ǵ����ϰ�װ�õĳ���λ�á�������������ң��ǵøĳ���ġ�
* notepad��ϵͳ�ļ��±�

Ҳ������չ�����ø���༭����ǰ������Щ�༭�����������д��ļ���

���� Telescape.exe��˵��


### chrome��װTelescape��չ 

1. ��chrome��չ���棺`chrome://extensions/`
2. ��<span class="blue">app�ļ���</span> ���뵽�������
3. ��װ�ɹ����ҵ���չ��ID���� kolkkhbadaejpjklkedblfahiahaipha  , ����ID���뵽 `host/Telescape.json` ��allowed_origins�ڵ�,���磺
```
	"allowed_origins": [
		"chrome-extension://kolkkhbadaejpjklkedblfahiahaipha/"
	]
```
















## ʹ�� - How to use

### ��html��ǩ��������

html��ǩ�������� : class / codefilepath / editor ����

```
<!-- �����Ͽ���Ӧ�����κα�ǩ , ��span��Ϊʾ�� -->
<span class="telescape" codefilepath="E:\APMServ5.2.6\www\htdocs\t.php" editor="editplus">t.php</span>

```
* �������� class="telescape"
* editor��ֵ��config.ini���õ��� ��editplus �� sublime �� notepad , Ҳ�������գ���ôĬ����editplus����ȻĬ��ʹ��ʲô�༭��Ҳ���Ը�, �޸� `app/main.js` ������ע��
* codefilepath������һ���ļ���Ҳ������һ���ļ��У��������ڣ��򵯳�������ʾ��


ע�⣺����᲻�ϻ�ȡtelescape��ǩ��������¼�


 
### Telescape.exe 


Telescape.exe��ʹ��C# �����ģ���Ҫ������밲װ .net framework 4.0 ���� ��Ŀǰ Telescape.exe ��Դ����û�ų��� ... ���뿴�»���ʲô���Ըĵģ��㷴��һ�¿��Կ���Դ�롣


�����˫��ֱ�Ӵ�Telescape.exe���������������֣�����ʲô��û�ɡ���ʵ������һ�����������в����ĳ�����Ϊ�Žӳ���


ʵ��������ִ�е��ǣ�

```
// ע��ת��
$ Telescape.exe "{\"Editor\":\"sublime\",\"FilePath\":\"E:\\APMServ5.2.6\\www\\htdocs\\t.php\"}"

֮�� Telescape.exe�����json, ��config.ini ȡ�� Editor,  �ٵ�����������Editor��FilePath

```

���̾��ǣ�<span class="red">ͨ�� chrome ������Ͳ����� Telescape.exe ---- Telescape.exe�жϴ���󣬻�ʹ�������е��༭���򿪾����ļ�</span>


### ����


��չ��ǿ���޸� Telescape.exe ,���� ���κ������뵽��ʵ�ֵĹ���


��ʵ��Ҳ�������������Կ�������Telescape.exe�Ķ���������java ��c++��python�ȵ�


������������ǣ������ʹ��һ��bat�ļ������ Telescape.exe����bat�ļ�ò�ƻᵯ��һ�������д��ڣ�������������չ�Բ�ǿ��

