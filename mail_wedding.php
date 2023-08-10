<?php
$headers = "Content-Type: text/html; charset=UTF-8\r\n";

function eventType($key){
    $arr = [
        'wedding' => 'Весілля',
        'birthday' => 'День народження',
        'other' => 'Інше святкування',
    ];
    return $arr[$key];
}
    $m = mail('events@bankhotel.com.ua', "Замовлення події weddings.bankhotel.com.ua $_POST[tel]", "
    <table>
    <tr>
        <td>Подія</td>
        <td>" . eventType($_POST['event']) . "</td>
    </tr>
    <tr>
        <td>Дата події</td>
        <td>{$_POST['date']}</td>
    </tr>
    <tr>
        <td>Кількість осіб<td>
        <td>{$_POST['count']}</td>
    </tr>
    <tr>
        <td>Чи потрібні номери гостям<td>
        <td>{$_POST['hotel']}</td>
    </tr>
    <tr>
        <td>Контактна особа<td>
        <td>{$_POST['name']}</td>
    </tr>
    <tr>
        <td>Телефон<td>
        <td>{$_POST['tel']}</td>
    </tr>
    <tr>
        <td>Email<td>
        <td>{$_POST['email']}</td>
    </tr>
    </table>

    ", $headers);

if($m){
    echo json_encode(['rez' => true]);
}else{
    echo json_encode(['rez' => false]);
}
die;
?>


