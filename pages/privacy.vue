<template>
  <div class="privacy">
    <FormsTop title="PRIVACY&POLICY" subTitle="プライバシーポリシー" />
    <div class="privacy__background">
      <div class="privacy__background__container">
        <h2>プライバシーポリシー（個人情報保護方針）</h2>
        <div class="privacy__background__container__content">
          <p>株式会社〇〇〇〇（以下、「当社」といいます）は、当社が運営するウェブサイト（以下、「当サイト」といいます）において提供いただく個人情報の重要性を認識し、以下の方針に基づき適切な取扱いと保護に努めます。</p>
          <div class="privacy__background__container__content__heading">
            <h2>1. 個人情報の取得について</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>当社は、お問い合わせ、資料請求、採用応募などの際に、氏名、住所、電話番号、メールアドレス等の個人情報をご提供いただくことがあります。</p>
          <div class="privacy__background__container__content__heading">
            <h2>2. 個人情報の利用目的</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>取得した個人情報は、以下の目的の範囲内で利用いたします。<br>
            ・お問い合わせへの対応<br>
            ・資料送付やご案内のため<br>
            ・サービス提供およびその向上のため<br>
            ・採用選考および連絡のため<br>
            その他、あらかじめ明示した利用目的の範囲内での利用</p>
          <div class="privacy__background__container__content__heading">
            <h2>3. 個人情報の第三者提供について</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>当社は、法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。</p>
          <div class="privacy__background__container__content__heading">
            <h2>4. 個人情報の管理</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>当社は、個人情報の漏えい、滅失、毀損、改ざん、不正アクセス等を防止するため、必要かつ適切な安全対策を講じ、厳重に管理します。</p>
          <div class="privacy__background__container__content__heading">
            <h2>5. 委託先の監督</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>個人情報の取扱いを外部に委託する場合は、委託先に対して必要かつ適切な監督を行います。</p>
          <div class="privacy__background__container__content__heading">
            <h2>6. 開示・訂正・削除等のご請求</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>ご本人からの個人情報の開示、訂正、追加、削除、利用停止等のご請求があった場合には、速やかに対応いたします。</p>
          <div class="privacy__background__container__content__heading">
            <h2>7. Cookie等の利用について</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>当サイトでは、利便性向上やアクセス解析のため、Cookie等の技術を使用する場合があります。<br>
            ※Cookieにより収集される情報には、特定の個人を識別できる情報は含まれません。</p>
          <div class="privacy__background__container__content__heading">
            <h2>8. アクセス解析ツールについて</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>当サイトでは、サイトの利用状況を把握し、サービス改善に活かすために、Google LLCが提供するアクセス解析ツール「Google Analytics」を利用しています。Google Analyticsは、Cookieを利用して利用者の情報を収集します。<br>
            これらの情報は匿名で収集されており、個人を特定するものではありません。Google Analyticsの利用により収集されたデータは、Google社のプライバシーポリシーに基づいて管理されます。<br>
            Google社のプライバシーポリシーに関する詳細は以下をご参照ください：<br>
          <a href="https://policies.google.com/privacy?hl=ja">https://policies.google.com/privacy?hl=ja</a></p>
          <div class="privacy__background__container__content__heading">
            <h2>9. プライバシーポリシーの改定</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>本プライバシーポリシーの内容は、法令の改正やサービス内容の変更等に応じて、予告なく変更することがあります。</p>
          <div class="privacy__background__container__content__heading">
            <h2>10. お問い合わせ窓口</h2>
            <div class="privacy__background__container__content__heading__hr"></div>
          </div>
          <p>個人情報に関するお問い合わせは、以下の窓口までご連絡ください。<br>
            <br>
            【事業者名】株式会社〇〇〇〇<br>
            【住所】〒123-4567 東京都〇〇区〇〇〇〇<br>
            【代表者名】代表取締役 〇〇〇〇<br>
            【電話番号】03-xxxx-xxxx<br>
            【メールアドレス】info@example.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.privacy {
  background-color: #F2F2F2;
  padding: min(60px, 5.55vw) 0;
  .privacy__background {
    background-color: #fff;
    width: min(1280px, 88.88vw);
    border-radius: min(120px, 8.33vw);
    margin: min(90px, 6.25vw) auto;
    padding: min(80px, 5.55vw);
    &__container {
      h2 {
        font-size: min(28px, 1.94vw);
        margin-bottom: min(16px, 1.11vw);
        color: #252526;
      }
      &__content {
        p {
          font-size: min(18px, 1.25vw);
          margin-bottom: min(30px, 2.08vw);
          line-height: 1.8;
          color: #252526;
          font-weight: 500;
        }
        &__heading {
          position: relative;
          h2 {
            width: fit-content;
            background-color: #fff;
            position: relative;
            z-index: 1;
            padding: 0 min(16px, 1.11vw) 0 0;
          }
          &__hr {
            width: 100%;
            height: 2px;
            background-color: #252526;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 0;
          }
        }
      }
    }
  }
}
</style>