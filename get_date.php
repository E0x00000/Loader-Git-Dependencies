<?php
function getDataAtual() {
    // Obtém a data atual
    $dataAtual = date("Y-m-d");
    
    // Retorna a data atual
    return $dataAtual;
}

// Chamada da função para obter a data atual
$dataAtual = getDataAtual();

// Retorna apenas a data atual
echo $dataAtual;
?>
